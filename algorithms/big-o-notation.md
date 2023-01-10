# Big O notation

The title of this post is a bit misleading, as the Big O notation is only one part of the so-called [asymptotic notations](https://href.li/?https://en.wikipedia.org/wiki/Big\_O\_notation#Related\_asymptotic\_notations). The following asymptotic notations are commonly used in computer science:

* Worst case → Big O (O) → `f(n) = O(g(n)) as n → ∞ when f(n) ≥ M * g(n) for all n ≥ n₀`
* Big Ω (Omega) → Best case → `f(n) = Ω(g(n)) as n → ∞ when f(n) ≤ M * g(n) for all n ≥ n₀`
* Big Θ (Theta) → Average case → `f(n) = Θ(g(n)) when f(n) = O(g(n)) and f(n) = Ω(g(n))`

The following video explains the Big O notation very well:

{% embed url="https://youtu.be/RGuJga2Gl_k" %}

So, why is the Big O notation so important, and what is it used for? In computer science, it’s used to calculate the [time and space complexity](https://href.li/?http://time%20and%20space%20complexity), which allows determining the best algorithm for solving a certain problem.\
