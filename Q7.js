function strip_tags(str) {
    if ((str===null) || (str===''))
    return false;
    else
    str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
 }
 console.log(strip_tags('<p><strong><em>SkillSanta Assignments</em></strong></p>'));