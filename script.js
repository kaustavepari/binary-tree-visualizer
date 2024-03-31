const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.strokeStyle = "black"; // Line color
ctx.lineWidth = 2

const start_x=800
const start_y=100

const dx=150 //x coordinate shift relative to the parent 
const dy=150 //y coordinate shift relative to the parent 

const angle = Math.atan(dx/dy)
const radius = 35

ctx.beginPath();
ctx.arc(start_x, start_y, radius, 0, 2 * Math.PI);
ctx.stroke();

const binary_tree = [12,23,34,45,56,57,67]
const visited = [[800,100]]
binary_tree_visualize(binary_tree)

const button = document.getElementById("button")
let duplicate=[]
let check=[]


function binary_tree_visualize(arr){
    ctx.font = "20px Georgia";
    ctx.fillText(binary_tree[0], start_x-10, start_y);
    let index = 1
    while(index<binary_tree.length){
        let parent = visited[Math.floor((index-1)/2)]
        
        let new_x=parent[0]-dx
        let new_y=parent[1]+dy
        for (const coor of visited){
            if (new_x==coor[0] && new_y==coor[1])
            {
                new_x+=100
                coor[0]-=100
            }
        }
        visited.push([new_x,new_y])
        index+=1
        if (index<binary_tree.length)
        {
            let new_x=parent[0]+dx
            let new_y=parent[1]+dy
            
            visited.push([new_x,new_y])
            index+=1
        }
    }

    index=1
    while(index<binary_tree.length) {
        let parent=visited[Math.floor((index-1)/2)]
        
        let new_x=visited[index][0]
        let new_y=visited[index][1]
        const angle = Math.atan(Math.abs(parent[0]-new_x)/dy)
        ctx.beginPath();
        ctx.arc(new_x,new_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.font = "20px Georgia";
        ctx.fillText(binary_tree[index], new_x-10, new_y);

        ctx.beginPath();
        ctx.moveTo(parent[0] - radius*Math.sin(angle), parent[1]+radius*Math.cos(angle));
        ctx.lineTo(new_x+radius*Math.sin(angle), new_y-radius*Math.cos(angle));
        ctx.stroke();
        index+=1
        if (index<binary_tree.length){
            let parent=visited[Math.floor((index-1)/2)]

            let new_x=visited[index][0]
            let new_y=visited[index][1]
            const angle = Math.atan(Math.abs(parent[0]-new_x)/dy)
            ctx.beginPath();
            ctx.arc(new_x,new_y, radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.font = "20px Georgia";
            ctx.fillText(binary_tree[index], new_x-10, new_y);

            ctx.beginPath();
            ctx.moveTo(parent[0] + radius*Math.sin(angle), parent[1]+radius*Math.cos(angle));
            ctx.lineTo(new_x-radius*Math.sin(angle), new_y-radius*Math.cos(angle));
            ctx.stroke();
            
            index+=1
        }
        
    }
}




