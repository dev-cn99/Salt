const getSalt = () => {

    let text = 'qwertyuiopasdfghjklzxcvbnm1234567890_$';

    let str = '';

    for (let i in str) str += text[new java.security.SecureRandom().nextInt(38)];;

    return str.slice(5);

};
