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
export const ShellSort = ({initialArr, todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    for (let step=n/2;step>0;step=Math.floor(step/2)){
        for (let i=0;i<n;i+=step){
            for (let j=i-step;j>=0;j-=step){
                todoFunction(arr,j,j+step,1);
                if (arr[j]>arr[j+step]){
                    arr[j]+=arr[j+step];
                    arr[j+step]=arr[j]-arr[j+step];
                    arr[j]-=arr[j+step];
                    todoFunction(arr,j,j+step,0);
                }else break;
            }
        }    
    }
    
}

export const QuickSort = ({initialArr,todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    const doQuickSort = (l:number,r:number)=>{
        if (l>=r) return;
        let pivotIndex=Math.floor((l+r)/2);
        let pivot=arr[pivotIndex];
        let i=l;
        let j=r;
        while (i<=j){
            while (arr[i]<pivot) {
                todoFunction(arr,i,pivotIndex,1);
                i+=1;}
            while (arr[j]>pivot) {
                todoFunction(arr,j,pivotIndex,1);
                j-=1;
            }
            if (i<j){
                if (i===pivotIndex || j===pivotIndex) pivotIndex=i+j-pivotIndex;
                arr[i]+=arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]-=arr[j];
                todoFunction(arr,i,j,0);
            }
            if (i<=j){i+=1;j-=1;}
        }
        doQuickSort(l,j);
        doQuickSort(i,r);
    }
    doQuickSort(0,n-1);
}

export const RandomQuickSort = ({initialArr,todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    const doQuickSort = (l:number,r:number)=>{
        if (l>=r) return;
        let pivotIndex=Math.floor(Math.random()*(r-l))+l;
        let pivot=arr[pivotIndex];
        let i=l;
        let j=r;
        while (i<=j){
            while (arr[i]<pivot) {
                todoFunction(arr,i,pivotIndex,1);
                i+=1;}
            while (arr[j]>pivot) {
                todoFunction(arr,j,pivotIndex,1);
                j-=1;
            }
            if (i<j){
                if (i===pivotIndex || j===pivotIndex) pivotIndex=i+j-pivotIndex;
                arr[i]+=arr[j];
                arr[j]=arr[i]-arr[j];
                arr[i]-=arr[j];
                todoFunction(arr,i,j,0);
            }
            if (i<=j){i+=1;j-=1;}
        }
        doQuickSort(l,j);
        doQuickSort(i,r);
    }
    doQuickSort(0,n-1);
}

export const HeapSort = ({initialArr,todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    const makeHeap = (cur:number,n:number) =>{
        while (cur<n){
            if (cur*2+1>=n) break;
            let pick = cur*2+1;
            if (cur*2+2<n){
                todoFunction(arr,cur*2+1,cur*2+2,1);
                if (arr[cur*2+2]>arr[pick]) pick=cur*2+2;
            }
            todoFunction(arr,cur,pick,1);
            if (arr[cur]>arr[pick]) break;
            arr[cur]+=arr[pick];
            arr[pick]=arr[cur]-arr[pick];
            arr[cur]-=arr[pick];
            todoFunction(arr,cur,pick,0);
            cur=pick;
        }
    }
    for (let i=n-1;i>=0;i--) makeHeap(i,n);
    for (let i=n-1;i>0;i--){
        arr[0]+=arr[i];
        arr[i]=arr[0]-arr[i];
        arr[0]-=arr[i];
        todoFunction(arr,-1,-1,0);
        makeHeap(0,i);
    }
}

export const MergeSort = ({initialArr,todoFunction}:AlgorithmProps)=>{
    const n=initialArr.length;
    let arr=initialArr;
    const doMergeSort = (l:number,r:number)=>{
        let pivot=Math.floor((l+r)/2);
        if (l==r) return;
        doMergeSort(l,pivot);
        doMergeSort(pivot+1,r);
        let l1=l;
        let l2=pivot+1;
        let tempArr:Array<number>=[];
        while (l1<=pivot && l2<=r){
            todoFunction(arr,l1,l2,1);
            if (arr[l1]<arr[l2]){
                tempArr.push(arr[l1]);
                l1++;
            }else{
                tempArr.push(arr[l2]);
                l2++;
            }
        }
        while (l1<=pivot){
            tempArr.push(arr[l1]);
            l1++;
        }
        while (l2<=r){
            tempArr.push(arr[l2]);
            l2++;
        }
        tempArr.forEach((val,idx)=>{
            arr[l+idx]=val;
            todoFunction(arr,-1,-1,0);
        });
    }
    doMergeSort(0,n-1);
}

export const BogoSort = ({initialArr, todoFunction}:AlgorithmProps)=>{
    const n=Math.min(initialArr.length,5);
    let arr=initialArr.slice(0,n);
    while (true){
        let i=0;
        for (i=1;i<n;i++){
            todoFunction(arr,i,i-1,1);
            if (arr[i]<arr[i-1]) break;
        }
        if (i===n) break;
        for (let j=n-1;j>0;j--){
            let pick=Math.floor(Math.random()*(j+1));
            if (pick===j) continue;
            arr[pick]+=arr[j];
            arr[j]=arr[pick]-arr[j];
            arr[pick]-=arr[j];
            todoFunction(arr,-1,-1,0);
        }
    }
}
