const getSalt = () => {

    let text = 'qwertyuiopasdfghjklzxcvbnm1234567890_$';

    let str = new java.lang.StringBuffer();

    for (let i in str) str.append(text[new java.security.SecureRandom().nextInt(38]);

    return string(str).substring(0, 5);

};
