# K-Means Clustering Activity

**This assignment is under construction for the 26-27 school year.**

## Objectives
1. Explain how K-Means groups data points by distance to cluster centers.
2. Scale features so each one counts equally when measuring distance.
3. Choose a number of clusters using the elbow method and silhouette score.
4. Interpret clusters and connect them back to the real-world data.

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| clustering | grouping data points so similar points end up in the same group |
| unsupervised learning | machine learning with no "right answers" given; the model finds patterns on its own |
| cluster | one group of similar data points |
| centroid | the center point of a cluster, found by averaging all of its points |
| K | the number of clusters you ask K-Means to find |
| inertia | how spread out the points are from their centroids; lower means tighter clusters |
| silhouette score | a score from -1 to 1 for how well each point fits its own cluster compared to the next closest one; higher is better |
| scaling | putting features on the same range so no single feature controls the distance |

## How K-Means Works

K-Means sorts data into **K** groups. You pick K. The algorithm does the rest:

1. **Place K centers.** Start with K centroids (the ✕ marks), usually at random spots.
2. **Assign.** Each point joins the cluster of its **nearest** centroid.
3. **Move.** Each centroid moves to the **average position** of its points.
4. **Repeat** steps 2 and 3 until the centroids stop moving.

<div style="text-align: center; margin: 1rem 0;">
<svg viewBox="0 0 440 480" width="440" style="max-width: 100%; height: auto;" role="img" aria-label="Four steps of K-Means: place 3 centers, assign each point to the nearest center, move each center to the middle of its points, and repeat until the centers stop moving" font-family="inherit" fill="currentColor"><g transform="translate(10,10)"><rect x="0" y="0" width="200" height="200" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.4"/><text x="100" y="222" font-size="14" text-anchor="middle">1. Place K centers</text><circle cx="60.0" cy="64.2" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="56.2" cy="47.5" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="53.6" cy="46.1" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="60.8" cy="78.8" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="53.1" cy="51.3" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="66.9" cy="65.0" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="61.5" cy="47.0" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="59.6" cy="69.7" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="41.2" cy="53.6" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="113.4" cy="51.9" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="114.2" cy="66.7" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="122.3" cy="73.8" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="142.2" cy="67.4" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="104.8" cy="62.5" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="139.3" cy="71.6" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="118.6" cy="63.3" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="126.3" cy="58.7" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="154.9" cy="58.7" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="95.5" cy="162.4" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="87.8" cy="148.4" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="97.5" cy="150.9" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="78.8" cy="151.1" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="115.0" cy="128.3" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="108.0" cy="151.7" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="87.0" cy="178.0" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="106.7" cy="133.2" r="4.5" fill="currentColor" fill-opacity="0.5"/><circle cx="97.0" cy="158.1" r="4.5" fill="currentColor" fill-opacity="0.5"/><g stroke="#3b82f6" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="31.0" y1="111.0" x2="49.0" y2="129.0"/><line x1="31.0" y1="129.0" x2="49.0" y2="111.0"/></g><g stroke="#ef4444" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="71.0" y1="35.0" x2="89.0" y2="53.0"/><line x1="71.0" y1="53.0" x2="89.0" y2="35.0"/></g><g stroke="#22c55e" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="111.0" y1="51.0" x2="129.0" y2="69.0"/><line x1="111.0" y1="69.0" x2="129.0" y2="51.0"/></g></g><g transform="translate(230,10)"><rect x="0" y="0" width="200" height="200" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.4"/><text x="100" y="222" font-size="14" text-anchor="middle">2. Assign to nearest</text><circle cx="60.0" cy="64.2" r="4.5" fill="#ef4444"/><circle cx="56.2" cy="47.5" r="4.5" fill="#ef4444"/><circle cx="53.6" cy="46.1" r="4.5" fill="#ef4444"/><circle cx="60.8" cy="78.8" r="4.5" fill="#ef4444"/><circle cx="53.1" cy="51.3" r="4.5" fill="#ef4444"/><circle cx="66.9" cy="65.0" r="4.5" fill="#ef4444"/><circle cx="61.5" cy="47.0" r="4.5" fill="#ef4444"/><circle cx="59.6" cy="69.7" r="4.5" fill="#ef4444"/><circle cx="41.2" cy="53.6" r="4.5" fill="#ef4444"/><circle cx="113.4" cy="51.9" r="4.5" fill="#22c55e"/><circle cx="114.2" cy="66.7" r="4.5" fill="#22c55e"/><circle cx="122.3" cy="73.8" r="4.5" fill="#22c55e"/><circle cx="142.2" cy="67.4" r="4.5" fill="#22c55e"/><circle cx="104.8" cy="62.5" r="4.5" fill="#22c55e"/><circle cx="139.3" cy="71.6" r="4.5" fill="#22c55e"/><circle cx="118.6" cy="63.3" r="4.5" fill="#22c55e"/><circle cx="126.3" cy="58.7" r="4.5" fill="#22c55e"/><circle cx="154.9" cy="58.7" r="4.5" fill="#22c55e"/><circle cx="95.5" cy="162.4" r="4.5" fill="#3b82f6"/><circle cx="87.8" cy="148.4" r="4.5" fill="#3b82f6"/><circle cx="97.5" cy="150.9" r="4.5" fill="#3b82f6"/><circle cx="78.8" cy="151.1" r="4.5" fill="#3b82f6"/><circle cx="115.0" cy="128.3" r="4.5" fill="#22c55e"/><circle cx="108.0" cy="151.7" r="4.5" fill="#3b82f6"/><circle cx="87.0" cy="178.0" r="4.5" fill="#3b82f6"/><circle cx="106.7" cy="133.2" r="4.5" fill="#3b82f6"/><circle cx="97.0" cy="158.1" r="4.5" fill="#3b82f6"/><g stroke="#3b82f6" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="31.0" y1="111.0" x2="49.0" y2="129.0"/><line x1="31.0" y1="129.0" x2="49.0" y2="111.0"/></g><g stroke="#ef4444" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="71.0" y1="35.0" x2="89.0" y2="53.0"/><line x1="71.0" y1="53.0" x2="89.0" y2="35.0"/></g><g stroke="#22c55e" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="111.0" y1="51.0" x2="129.0" y2="69.0"/><line x1="111.0" y1="69.0" x2="129.0" y2="51.0"/></g></g><g transform="translate(10,250)"><rect x="0" y="0" width="200" height="200" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.4"/><text x="100" y="222" font-size="14" text-anchor="middle">3. Move centers to middle</text><circle cx="60.0" cy="64.2" r="4.5" fill="#ef4444"/><circle cx="56.2" cy="47.5" r="4.5" fill="#ef4444"/><circle cx="53.6" cy="46.1" r="4.5" fill="#ef4444"/><circle cx="60.8" cy="78.8" r="4.5" fill="#ef4444"/><circle cx="53.1" cy="51.3" r="4.5" fill="#ef4444"/><circle cx="66.9" cy="65.0" r="4.5" fill="#ef4444"/><circle cx="61.5" cy="47.0" r="4.5" fill="#ef4444"/><circle cx="59.6" cy="69.7" r="4.5" fill="#ef4444"/><circle cx="41.2" cy="53.6" r="4.5" fill="#ef4444"/><circle cx="113.4" cy="51.9" r="4.5" fill="#22c55e"/><circle cx="114.2" cy="66.7" r="4.5" fill="#22c55e"/><circle cx="122.3" cy="73.8" r="4.5" fill="#22c55e"/><circle cx="142.2" cy="67.4" r="4.5" fill="#22c55e"/><circle cx="104.8" cy="62.5" r="4.5" fill="#22c55e"/><circle cx="139.3" cy="71.6" r="4.5" fill="#22c55e"/><circle cx="118.6" cy="63.3" r="4.5" fill="#22c55e"/><circle cx="126.3" cy="58.7" r="4.5" fill="#22c55e"/><circle cx="154.9" cy="58.7" r="4.5" fill="#22c55e"/><circle cx="95.5" cy="162.4" r="4.5" fill="#3b82f6"/><circle cx="87.8" cy="148.4" r="4.5" fill="#3b82f6"/><circle cx="97.5" cy="150.9" r="4.5" fill="#3b82f6"/><circle cx="78.8" cy="151.1" r="4.5" fill="#3b82f6"/><circle cx="115.0" cy="128.3" r="4.5" fill="#22c55e"/><circle cx="108.0" cy="151.7" r="4.5" fill="#3b82f6"/><circle cx="87.0" cy="178.0" r="4.5" fill="#3b82f6"/><circle cx="106.7" cy="133.2" r="4.5" fill="#3b82f6"/><circle cx="97.0" cy="158.1" r="4.5" fill="#3b82f6"/><g stroke="#3b82f6" stroke-width="4" stroke-linecap="round" opacity="0.35"><line x1="31.0" y1="111.0" x2="49.0" y2="129.0"/><line x1="31.0" y1="129.0" x2="49.0" y2="111.0"/></g><line x1="40.0" y1="120.0" x2="94.8" y2="154.2" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4 3"/><g stroke="#ef4444" stroke-width="4" stroke-linecap="round" opacity="0.35"><line x1="71.0" y1="35.0" x2="89.0" y2="53.0"/><line x1="71.0" y1="53.0" x2="89.0" y2="35.0"/></g><line x1="80.0" y1="44.0" x2="57.0" y2="58.1" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3"/><g stroke="#22c55e" stroke-width="4" stroke-linecap="round" opacity="0.35"><line x1="111.0" y1="51.0" x2="129.0" y2="69.0"/><line x1="111.0" y1="69.0" x2="129.0" y2="51.0"/></g><line x1="120.0" y1="60.0" x2="125.1" y2="70.3" stroke="#22c55e" stroke-width="2" stroke-dasharray="4 3"/><g stroke="#3b82f6" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="85.8" y1="145.2" x2="103.8" y2="163.2"/><line x1="85.8" y1="163.2" x2="103.8" y2="145.2"/></g><g stroke="#ef4444" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="48.0" y1="49.1" x2="66.0" y2="67.1"/><line x1="48.0" y1="67.1" x2="66.0" y2="49.1"/></g><g stroke="#22c55e" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="116.1" y1="61.3" x2="134.1" y2="79.3"/><line x1="116.1" y1="79.3" x2="134.1" y2="61.3"/></g></g><g transform="translate(230,250)"><rect x="0" y="0" width="200" height="200" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.4"/><text x="100" y="222" font-size="14" text-anchor="middle">4. Repeat until stable</text><circle cx="60.0" cy="64.2" r="4.5" fill="#ef4444"/><circle cx="56.2" cy="47.5" r="4.5" fill="#ef4444"/><circle cx="53.6" cy="46.1" r="4.5" fill="#ef4444"/><circle cx="60.8" cy="78.8" r="4.5" fill="#ef4444"/><circle cx="53.1" cy="51.3" r="4.5" fill="#ef4444"/><circle cx="66.9" cy="65.0" r="4.5" fill="#ef4444"/><circle cx="61.5" cy="47.0" r="4.5" fill="#ef4444"/><circle cx="59.6" cy="69.7" r="4.5" fill="#ef4444"/><circle cx="41.2" cy="53.6" r="4.5" fill="#ef4444"/><circle cx="113.4" cy="51.9" r="4.5" fill="#22c55e"/><circle cx="114.2" cy="66.7" r="4.5" fill="#22c55e"/><circle cx="122.3" cy="73.8" r="4.5" fill="#22c55e"/><circle cx="142.2" cy="67.4" r="4.5" fill="#22c55e"/><circle cx="104.8" cy="62.5" r="4.5" fill="#22c55e"/><circle cx="139.3" cy="71.6" r="4.5" fill="#22c55e"/><circle cx="118.6" cy="63.3" r="4.5" fill="#22c55e"/><circle cx="126.3" cy="58.7" r="4.5" fill="#22c55e"/><circle cx="154.9" cy="58.7" r="4.5" fill="#22c55e"/><circle cx="95.5" cy="162.4" r="4.5" fill="#3b82f6"/><circle cx="87.8" cy="148.4" r="4.5" fill="#3b82f6"/><circle cx="97.5" cy="150.9" r="4.5" fill="#3b82f6"/><circle cx="78.8" cy="151.1" r="4.5" fill="#3b82f6"/><circle cx="115.0" cy="128.3" r="4.5" fill="#3b82f6"/><circle cx="108.0" cy="151.7" r="4.5" fill="#3b82f6"/><circle cx="87.0" cy="178.0" r="4.5" fill="#3b82f6"/><circle cx="106.7" cy="133.2" r="4.5" fill="#3b82f6"/><circle cx="97.0" cy="158.1" r="4.5" fill="#3b82f6"/><g stroke="#3b82f6" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="88.1" y1="142.3" x2="106.1" y2="160.3"/><line x1="88.1" y1="160.3" x2="106.1" y2="142.3"/></g><g stroke="#ef4444" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="48.0" y1="49.1" x2="66.0" y2="67.1"/><line x1="48.0" y1="67.1" x2="66.0" y2="49.1"/></g><g stroke="#22c55e" stroke-width="4" stroke-linecap="round" opacity="1"><line x1="117.2" y1="54.8" x2="135.2" y2="72.8"/><line x1="117.2" y1="72.8" x2="135.2" y2="54.8"/></g></g></svg>
</div>

Notice the green point near the bottom group in step 2. Once the centroids move, it's closer to blue, so it switches. That's why K-Means repeats.

**Why scale?** K-Means measures straight-line distance. If one feature is in the thousands and another is in single digits, the big one controls everything. Scaling puts every feature on the same range.

### Choosing K

K-Means always gives you K clusters, even if K is a bad choice. Two ways to choose:

- **Elbow method:** Plot inertia for K = 1, 2, 3, …. Inertia always drops as K grows, but at some point it stops dropping much. That bend, the "elbow," is a good K.
- **Silhouette score:** Higher is better. Use it to compare a few K values near your elbow.

<div style="text-align: center; margin: 1rem 0;">
<svg viewBox="0 0 400 230" width="400" style="max-width: 100%; height: auto;" role="img" aria-label="Elbow plot: inertia drops quickly from K equals 1 to 3, then flattens out. The elbow is at K equals 3." font-family="inherit" fill="currentColor"><line x1="40" y1="180" x2="380" y2="180" stroke="currentColor"/><line x1="40" y1="10" x2="40" y2="180" stroke="currentColor"/><text x="210" y="222" font-size="14" text-anchor="middle">K (number of clusters)</text><text x="18" y="95" font-size="14" text-anchor="middle" transform="rotate(-90 18 95)">Inertia</text><polyline fill="none" stroke="#3b82f6" stroke-width="3" points="50,20 110,115 170,157 230,160 290,163 350,165"/><circle cx="50" cy="20" r="5" fill="#3b82f6"/><text x="50" y="198" font-size="13" text-anchor="middle">1</text><circle cx="110" cy="115" r="5" fill="#3b82f6"/><text x="110" y="198" font-size="13" text-anchor="middle">2</text><circle cx="170" cy="157" r="5" fill="#3b82f6"/><text x="170" y="198" font-size="13" text-anchor="middle">3</text><circle cx="230" cy="160" r="5" fill="#3b82f6"/><text x="230" y="198" font-size="13" text-anchor="middle">4</text><circle cx="290" cy="163" r="5" fill="#3b82f6"/><text x="290" y="198" font-size="13" text-anchor="middle">5</text><circle cx="350" cy="165" r="5" fill="#3b82f6"/><text x="350" y="198" font-size="13" text-anchor="middle">6</text><circle cx="170" cy="157" r="12" fill="none" stroke="#ef4444" stroke-width="2.5"/><text x="188" y="143" font-size="14" fill="#ef4444">elbow</text></svg>
</div>

There is often more than one reasonable K. Pick one and defend it.

## Your Task

> **Start here:** Download the <a href="assets/K-Means-Clustering-Activity-Template.ipynb" download>K-Means Clustering notebook template</a>. It walks you through each step below.

You'll group California neighborhoods by location, then see if the groups have different house prices.

1. In a new Jupyter Notebook, load the California housing dataset into a **dataframe**. Only keep the `longitude`, `latitude`, and `median_house_value` columns. You can read it straight from this URL:
    ```
    https://raw.githubusercontent.com/ageron/handson-ml2/master/datasets/housing/housing.csv
    ```

2. Make a scatter plot with `longitude` on the x-axis and `latitude` on the y-axis, colored by `median_house_value`. In a markdown cell, describe any patterns you see.

3. **Scale** the `latitude` and `longitude` columns. In a markdown cell, explain why scaling matters for K-Means.

4. Run K-Means with **K = 3** on your scaled data. Make the same scatter plot as step 2, but color it by cluster.

5. Make a box plot of `median_house_value` for each cluster. In a markdown cell, explain whether the clusters have different house prices.

6. **Choose K.** For K = 1 through 10, run K-Means and save each model's inertia. Plot inertia vs. K and find the elbow. Then find the silhouette score for a few K values near your elbow.

7. Rerun K-Means with your chosen K. Redo your cluster scatter plot and box plot.

8. At the end of your notebook, add a short conclusion. Which K did you choose and why? What does each cluster represent in the real world?

## Tips, Tricks, and Resources

- [DataCamp: K-Means Clustering in Python](https://www.datacamp.com/tutorial/k-means-clustering-python) (the tutorial this activity is based on)
- [scikit-learn KMeans](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)
- [Visualizing K-Means Clustering](https://www.naftaliharris.com/blog/visualizing-k-means-clustering/): watch the algorithm run step by step
- Useful tools: `pd.read_csv(..., usecols=[...])`, `StandardScaler`, `KMeans(n_clusters=..., random_state=0, n_init="auto")`, `.labels_`, `.inertia_`, `silhouette_score`, `sns.scatterplot`, `sns.boxplot`, `sns.lineplot`.
- `KMeans` is in `sklearn.cluster`. `StandardScaler` is in `sklearn.preprocessing`. `silhouette_score` is in `sklearn.metrics`.
- `silhouette_score` is slow on 20,000 rows. Add `sample_size=5000` to speed it up.
- Make sure you activate your virtual environment before you `pip install pandas seaborn scikit-learn`.

## Reflection Questions
1. In your own words, how does K-Means decide which cluster a point belongs to?
2. Why did you need to scale your data before clustering?
3. Which K did you choose? Defend your choice using your elbow plot and silhouette scores.
4. K-Means found groups without being told what they mean. What do your clusters represent, and what does that tell you about California house prices?

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository with your notebook and walk them through your clusters and conclusion. You will also need to answer the reflection questions.

## Rubric
- **10 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
