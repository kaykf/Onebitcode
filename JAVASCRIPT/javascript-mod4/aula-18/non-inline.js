function group (){
    console.log('Export nomeado não-inline (agrupado)')
}
function a(){console.log('A')}
function b(){console.log('B')}
function c(){console.log('C')}

function exportDefault(){
    console.log('Export default não-inline')
}

export {group, a, b, c}

export default exportDefault