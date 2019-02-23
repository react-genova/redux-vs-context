# redux and react context: another comparison

This article does not want to choose betweem redux and react context. 
In my personal opinion there's no choice at all: we need both, depending on the application we're creating.
Moreover, even if we decide to use redux as state management, we still can use context in all over out application.

## The comparison

This source code is a simply application, in which I duplicated the state and used both techonology, to compare and analise different aspects. Obviously the score you will find in each paragraph is the expression of my personal opinion. We start from equality:

`redux 0 - context 0`

### Boilerplate code

This is a hot topic, speaking about redux. I heard several times the saying: "when you use redux, you write lots of boilerplate code". I always assumed it was a true story even if I never had that kind of feeling. This little project for sure demonstrates redux and react context carry the same lines of code. There's no winner here. Using React Context gives you no advantages in terms of code length.

`redux 1 - context 1`

### Render performances

I admit I thought React Context was suffering from a performance issue, affecting the rendering phase. This belief derived from some articles I read online and is related to the fact that the context force a rerender whenever or not your componet is using the piece of context changed. Actually it's a false problem, because you only need to make your component a pure component, and no useless rerender will occurr.  
On the other side, the connect method of react-redux already makes your component pure, under the hood.  
That said, this is another *deuce*.

`redux 2 - context 2`

### Tesing

This project had a 100% test coverage. I used redux for years and I learnt to test it quickly and easily. I found redux far easier to test, but this is the first time I approach react context testing and I'm sure I did it the wrong way. It's not fair to let redux win this match, only because I never studied how to test context in a better wat. So, no winner again!

`redux 3 - context 3`

## Conclusions

So it's a *deuce*? Well, we only looked at three (main) arguments, but the two technoligies are deeply diffent. I still haven't found a valid reason to stop using redux and start using only context. Redux global store is such a marvellous plus that I need a very compelling and persuasive motivation to stop using redux. But I am also using React Context, every time I need to propagate information from a componet down to its children, without the need to store them in the global store.