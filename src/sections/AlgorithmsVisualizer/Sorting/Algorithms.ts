export interface AlgorithmProps{
    initialArr:Array<number>,
    todoFunction: (arr:Array<number>,x1:number,x2:number,c:number)=>void
}

export const SelectionSort = ({initialArr, todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    for (let i=0;i<n;i++){
        let curMin=arr[i];
        let curMinIdx=i;
        for (let j=i+1;j<n;j++){
            todoFunction(arr,curMinIdx,j,1);
            if (curMin>arr[j]){
                curMin=arr[j];
                curMinIdx=j;
            }
        }
        arr[curMinIdx]=arr[i];
        arr[i]=curMin;
        todoFunction(arr,-1,-1,0);
    }
}
export const BubbleSort = ({initialArr, todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    for (let i=n-1;i>=0;i--){
        for (let j=0;j<i;j++){
            todoFunction(arr,j,j+1,1);
            if (arr[j]>arr[j+1]){
                arr[j]+=arr[j+1];
                arr[j+1]=arr[j]-arr[j+1];
                arr[j]-=arr[j+1];
                todoFunction(arr,j,j+1,0);
            }
        }
    }
}
export const InsertionSort = ({initialArr, todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    for (let i=0;i<n;i++){
        for (let j=i-1;j>=0;j--){
            todoFunction(arr,j,j+1,1);
            if (arr[j]>arr[j+1]){
                arr[j]+=arr[j+1];
                arr[j+1]=arr[j]-arr[j+1];
                arr[j]-=arr[j+1];
                todoFunction(arr,j,j+1,0);
            }else break;
        }
    }
}