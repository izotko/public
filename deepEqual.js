function deepEqual(object1, object2) {
    if (object1 === object2) {
        return true;
    }
    const k1 = Object.keys(object1);
    if (k1.length !== 0 && k1.length === Object.keys(object2).length) {
        for (let prop in object1) {
            if (!deepEqual(object1[prop], object2[prop]))
            {
               return false;
            }
       }
       return true;
    }
    return false;
}
