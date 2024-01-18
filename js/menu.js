document.addEventListener('DOMContentLoaded', () => {
    if (window.innerHeight >= window.innerWidth) {
        document.getElementById('topLink').addEventListener('mouseover', () => {
            document.getElementById('top').classList = 'layer top phone hovered';
            document.getElementById('bottom').classList = 'layer phone bottom unHovered'
        })
        document.getElementById('topLink').addEventListener('mouseout', () => {
            document.getElementById('top').classList = 'layer top phone';
            document.getElementById('bottom').classList = 'layer phone bottom'
        })
        document.getElementById('bottomLink').addEventListener('mouseover', () => {
            document.getElementById('bottom').classList = 'layer bottom phone hovered';
            document.getElementById('top').classList = 'layer phone top unHovered'
        })
        document.getElementById('bottomLink').addEventListener('mouseout', () => {
            document.getElementById('top').classList = 'layer top phone';
            document.getElementById('bottom').classList = 'layer phone bottom'
        })
        document.getElementById('top').classList = 'layer top phone'
        document.getElementById('bottom').classList = 'layer bottom phone'
    }
})