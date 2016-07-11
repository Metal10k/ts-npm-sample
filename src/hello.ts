export default function hello(){
    console.log("hello world");
    return new HelloClass();
}

export class HelloClass{
    hello(){
        console.log("hello");
        return true;
    }
}