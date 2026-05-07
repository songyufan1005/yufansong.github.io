---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D., Department of Aeronautics, Imperial College London (in progress)
  * Supervisor: Dr. Yongyun Hwang
  * Thesis topic: data-driven resolvent analysis and eddy-viscosity closures for wall-bounded turbulence

Research interests
======
* Resolvent analysis of wall-bounded turbulent flows
* Linearised Navier–Stokes operators with eddy-viscosity closures (Cess and anisotropic variants)
* Data-driven extraction of optimal forcing/response pairs from DNS
* Coherent motions and the self-sustaining process in turbulent channel flow

Skills
======
* **Numerical methods**: direct numerical simulation of incompressible Navier–Stokes; spectral / pseudo-spectral methods
* **Modal analysis**: resolvent analysis, generalised eigenvalue problems, SVD/EVP-based optimal forcing extraction
* **Programming**: MATLAB, Python (NumPy/SciPy), Fortran (DNS codebases)
* **Scientific writing**: LaTeX, BibTeX

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Contact
======
* Email: ys723@ic.ac.uk
* Address: Department of Aeronautics, Imperial College London, South Kensington Campus, London SW7 2AZ, UK
