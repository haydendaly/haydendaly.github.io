import React from 'react';

const HindsightBody = (
  <>
    <h2>Summary</h2>
    <p>
      In 1975, Baruch Fischhoff published Hindsight ≠ Foresight: The Effect of Outcome Knowledge on
      Judgment Under Uncertainty in which he described a phenomenon in cognition he termed
      “Hindsight Bias.” Through a simple experiment, he showed that, when people are told that a
      specific outcome occurred, they tend to view that outcome as more probable than they would
      have without that knowledge — regardless of the actual probabilities. In other words, they
      will overestimate how confident they would have been before the event occurred. Furthermore,
      people are unaware of this bias and cannot purposely de-bias their perceptions.
    </p>
    <p>
      This effect was demonstrated through a simple survey. The participants were all provided
      textual data on the British-Gurkha Conflict. Then, the participants were told the outcome of
      the event (British victory, Gurkha victory, military stalemate with no peaceful settlement,
      and military stalemate with peaceful settlement). The control group was not provided with an
      outcome. Afterward, the participants were asked to estimate the probability of each outcome
      occurring and instructed specifically to behave as if they had not been told the actual
      outcome.
    </p>
    <p>
      In the experiment, the dependent variable is the estimated probability of the outcomes. The
      independent variable is the “true” outcome provided. The results clearly showed that
      participants who were given a specific outcome estimated its probability as significantly
      greater than the participants in the control group, validating the paper’s hypothesis.
    </p>
    <p>
      Of course, much has changed in the last 41 years since the paper was published, so we sought
      out to update this experiment and put it into a 21st century context. With that in mind, we
      adapted the methodology to gauge how people evaluate predictions from machine learning models.
      This is an area with immense application to public trust as these models become more and more
      commonplace.
    </p>
    <p>
      Social media platforms have a proliferation of misinformation from user-generated. Machine
      learning models have significant utility in the classification of misinformation and a key
      tool in content moderation on these large platforms. For example, these models are used in
      determining whether an article is legitimate news and can be used to flag potentially false
      information. Modern algorithms are not perfect and human oversight is needed to assess their
      performance. At the same time, a human cannot always accurately determine whether a news
      article is credible or not.
    </p>
    <p>
      Our hypothesis is that if a human moderator was reviewing a machine learning classification
      model’s output, the hindsight bias effect would kick in and they would view the likelihood of
      that article being credible or not would be irrevocably swayed in the direction of the model’s
      output.
    </p>
    <h2>Experiment Design</h2>
    <h3>Procedure</h3>
    <p>
      The experiment consists of three different rounds where the participants are provided a sample
      of text in a specific context and asked to estimate the probability of a binary outcome. The
      original experiment focused on the context of the British-Gurkha Conflict with the outcome of
      the British or Gurkha armies winning. To test the angle of public trust in ML systems, the
      participants are also provided two contexts with a binary outcome of being real vs. fake news.
      The provided articles are excerpts from an article about a bacon shortage from 2017 and a
      story about a physics student creating an atomic bomb for a class project. The participants
      were only shown the text of the articles so as not to invoke biases from the sources.
    </p>
    <p>
      Half the participants are in the control group and are simply asked to assess the
      probabilities of the possible outcomes. The other half are additionally provided with a
      message that a ML model had analyzed the same information. They were then given a random
      outcome and told it was the predicted classification. They were then also told to assess the
      probabilities of the possible outcomes, but to act as if they did not know what the model
      predicted. The control vs. experiment group was not constant from context-to-context meaning
      participants could be provided a “true” outcome for one context but not for another.
    </p>
    <p>
      The participants were provided the experiment in the form of a Qualtrics survey and shown the
      contexts sequentially. The excerpts and survey language can be viewed here.
    </p>
    <h3>Recruitment</h3>
    <p>
      For the original experiment, the researchers recruited 100 English-speaking students from the
      Hebrew University in Jerusalem. 80 Hebrew-speaking subjects at the University of the Negev in
      Beer Sheba. This resulted in 180 experiment participants. For our experiment, we reached out
      to 40 individuals via email with the experiment attached as a link. This resulted in 32
      participants partaking in the experiment itself. We aimed to replicate the same age level and
      targeted primarily students. For our participant demographics we found a mean age of 23.67
      years with a standard deviation of 1.94 years. In terms of education, 75% of the experiment
      participants have a bachelor’s degree.
    </p>
    <h2>Data Analysis</h2>
    <h3>British-Gurkha Conflict</h3>
    <p>
      Figure 1 shows the distributions of probabilities assigned for the British-Gurkha Conflict
      text. Each of the three groups is represented along the x-axis: (a) No Machine Learning
      (Control), (b) those told that the ML model predicted a British Win, and (c) those told that
      the ML model predicted a Gurkha Win. The y-axis represents the probabilities assigned to the
      outcome “British Win.” Each of the three plots features the following elements: A black box
      that represents the 25–75 percentile of responses, whiskers that represent the full range of
      responses, and an orange line representing the median response.
    </p>
    <p>
      The figure suggests that participants who were told the model predicted a British Win were
      much more likely to rate the probability of that occurring as higher than the control group.
      However, the reverse was not the case, as those who were told that the model predicted a
      Gurkha Win had a median actually slightly higher than the control group’s assessment of a
      British Win. However, the distribution of their responses did move towards the expected
      outcome, with those told of a Gurkha Win being significantly less likely to rate a British win
      as having above a 50% likelihood as compared to the control group.
    </p>
    <h3>Bacon and A-Bomb Kid Articles</h3>
    <p>
      Figures 2 and 3 present similar information to that in Figure 1, with the primary difference
      being that the y-label represents the probability an article was assessed to be Credible. The
      x-axis again represents the 3 testing groups, this time: (a) No Machine Learning (Control),
      (b) those told that the article was credible, and (c) those told the article was fake.
    </p>
    <p>
      Both of these figures support the hypothesis that respondents are swayed by the results of a
      machine learning model, with those being told the article was credible being more likely than
      the control group to assign a high probability of credibility and those who were told it was
      fake more likely to assign a low probability of credibility. Taken together, this also
      supports that the hindsight bias is not dependant on the actual probability, as the results
      held for both the true (Bacon) and false (A-Bomb) articles and for participants told either
      outcome for both articles.
    </p>
    <p>
      It is important to note that these results are drawn from a small sample size of 33
      participants. This leads to an outsize impact of individual differences in how the texts were
      assessed that may at times outweigh any effects of hindsight bias. While they do point in the
      direction of validating our hypothesis, they are not robust enough to draw firm conclusions.
    </p>
    <h2>Results and Conclusion</h2>
    <p>
      In general, our results supported the conclusions of the original paper. There is a hindsight
      bias that cannot be selectively ignored. It also supported our additional hypothesis that the
      hindsight bias extends to our trust in technology, specifically in machine learning models.
    </p>
    <p>
      This is an important notion as our society continues to evaluate our relationship with
      artificial intelligence and related technologies. After all, machine learning models are not a
      panacea or arbiters of truth. They can be wrong and very often are. Indeed, the machine
      learning model in our results was not even real, but it was still believed, even among our
      sample population that skewed heavily in the highly tech-literate direction. This blind trust
      in a model’s output needs to be tempered in ethical design, or else it could lead to
      potentially harmful manipulation of a person, group, or community’s perception.
    </p>
    <h2>Reference</h2>
    <p>
      Fischhoff B. (2003). Hindsight not equal to foresight: the effect of outcome knowledge on
      judgment under uncertainty. 1975. Quality & safety in health care, 12(4), 304–312.
      https://doi.org/10.1136/qhc.12.4.304
    </p>
  </>
);

export default HindsightBody;
