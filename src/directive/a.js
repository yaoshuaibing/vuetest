export default {
  bind(el, binding) {
    // 双击触发复制
    if (binding.modifiers.dblclick) {
      el.addEventListener('dblclick', () => handleClick(el.innerText))
      el.style.cursor = 'copy'
    }
  },
}

function handleClick(text) {
  console.log(text)
  // 创建元素
  if (!document.getElementById('copyTarget')) {
    const copyTarget = document.createElement('input')
    copyTarget.setAttribute(
      'style',
      'position:fixed;top:0;left:0;opacity:0;z-index:-1000;'
    )
    copyTarget.setAttribute('id', 'copyTarget')
    document.body.appendChild(copyTarget)
  }

  // 复制内容
  const input = document.getElementById('copyTarget')
  input.value = text
  input.select()
  document.execCommand('copy')
  alert('复制成功')
}
