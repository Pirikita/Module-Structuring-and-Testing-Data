## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? We get: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back? We get: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console` We get: 'object'

Answer the following questions:

What does `console` store? Console is a pre-defined object that stores debugging utilities 

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean? 
    The dot means that we are "calling" for a function that we specify after the dot, in this cases log and assert. 
    Console.log will always show our message while with console.assert only shows if the condition is false
