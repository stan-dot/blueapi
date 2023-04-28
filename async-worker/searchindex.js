Search.setIndex({"docnames": ["developer/explanations/architecture", "developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/explanations/lifecycle", "developer/explanations/type_validators", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "developer/tutorials/dev-run", "genindex", "index", "user/explanations/docs-structure", "user/how-to/run-container", "user/index", "user/reference/api", "user/tutorials/installation"], "filenames": ["developer/explanations/architecture.rst", "developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/explanations/lifecycle.rst", "developer/explanations/type_validators.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "developer/tutorials/dev-run.rst", "genindex.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/run-container.rst", "user/index.rst", "user/reference/api.rst", "user/tutorials/installation.rst"], "titles": ["Architecture", "Architectural Decision Records", "1. Record architecture decisions", "Lifecycle of a Plan", "Type Validators", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Update the tools", "Developer Guide", "Standards", "Developer install", "Run in a Developer Environment", "API Index", "blueapi", "About the documentation", "Run in a container", "User Guide", "API", "Installation"], "terms": {"blueapi": [0, 3, 4, 14, 19, 22], "perform": 0, "number": [0, 3, 6, 8, 19, 21], "task": [0, 12], "manag": 0, "blueski": [0, 3, 17], "runengin": [0, 3], "give": 0, "instruct": [0, 14], "handl": [0, 4, 6, 7], "its": [0, 3, 19, 22], "error": [0, 3, 9], "tradition": 0, "thi": [0, 2, 3, 4, 5, 7, 8, 9, 11, 13, 14, 18, 21, 22], "job": 0, "ha": [0, 4, 8, 11, 22], "been": [0, 22], "done": [0, 9, 10], "human": 0, "an": [0, 3, 4, 5, 7, 11], "ipython": 0, "termin": [0, 14, 22], "so": [0, 14, 22], "requir": [0, 9, 14, 15, 18, 22], "autom": 0, "maintain": 0, "registri": [0, 3, 19], "plan": [0, 4, 12, 17], "devic": [0, 3, 4], "In": [0, 3], "aforement": 0, "case": [0, 4, 14], "would": [0, 4], "have": [0, 4, 6, 7, 14, 15], "just": [0, 7], "global": [0, 3], "variabl": [0, 3], "commun": 0, "outsid": 0, "world": 0, "accept": [0, 2], "run": [0, 3, 5, 6, 11, 12, 13, 14, 20], "provid": [0, 11], "updat": [0, 12], "progress": 0, "etc": 0, "These": [0, 14], "respons": 0, "ar": [0, 3, 4, 5, 6, 9, 13, 15, 18, 19], "kept": 0, "separ": 0, "codebas": 0, "ensur": [0, 9, 15], "clean": 0, "main": [0, 8, 19], "hold": [0, 3], "well": [0, 3, 7], "helper": 0, "method": 0, "regist": [0, 3], "en": 0, "mass": 0, "from": [0, 2, 3, 5, 12, 13, 15, 19, 20, 22], "normal": 0, "python": [0, 8, 11, 14], "modul": [0, 3, 4, 11], "wrap": 0, "request": [0, 4, 6, 11], "includ": [0, 3, 5, 20], "name": [0, 3, 4], "dictionari": [0, 4], "paramet": [0, 3, 4], "pass": [0, 3, 4], "valid": [0, 12], "against": [0, 3, 4, 9], "known": [0, 4], "expect": 0, "ani": [0, 3, 5, 6, 7, 11, 22], "api": [0, 5, 13, 20], "layer": [0, 4], "refer": [0, 3, 18, 21], "can": [0, 3, 4, 5, 6, 7, 9, 10, 14, 15, 22], "interrog": 0, "messag": [0, 3], "reciev": [0, 3], "bu": [0, 3], "It": [0, 3, 4, 9, 10, 22], "also": [0, 3, 4, 5, 6, 9, 12, 20, 22], "forward": 0, "variou": [0, 4], "event": [0, 3], "gener": [0, 3, 4, 8, 11], "topic": [0, 18], "we": [1, 2, 6], "major": 1, "adr": [1, 2], "describ": [1, 2], "michael": [1, 2], "nygard": [1, 2], "below": 1, "i": [1, 3, 4, 6, 7, 9, 10, 11, 12, 13, 15, 18, 20, 21, 22], "list": [1, 3, 4], "our": 1, "current": [1, 4, 11, 22], "1": [1, 3, 4, 13], "date": 2, "2022": 2, "02": 2, "18": 2, "need": [2, 18, 22], "made": 2, "project": [2, 5, 9, 11, 12], "us": [2, 4, 12, 13, 14, 17, 19, 22], "see": [2, 5, 8], "": [2, 3, 4], "articl": 2, "link": [2, 12, 20], "abov": [2, 4, 7], "To": [2, 8, 11, 14, 19], "creat": [2, 4, 8, 17], "new": [2, 6, 8, 14, 20], "copi": 2, "past": 2, "exist": [2, 6, 22], "ones": 2, "The": [3, 4, 5, 6, 7, 9, 13, 15, 17, 18, 22], "follow": [3, 6, 8, 13, 14], "demonstr": 3, "exactli": 3, "what": [3, 6], "code": [3, 5, 7, 14, 17], "doe": [3, 6], "through": [3, 6, 9, 14], "being": [3, 4], "written": 3, "take": [3, 4, 14], "type": [3, 10, 12, 13, 14, 22], "import": [3, 13], "union": 3, "map": 3, "core": 3, "protocol": 3, "readabl": [3, 4], "def": [3, 4, 13], "count": [3, 4], "detector": [3, 4], "num": [3, 4], "int": [3, 4, 13], "delai": [3, 4], "option": [3, 8], "float": 3, "none": 3, "metadata": 3, "str": [3, 4, 13, 21], "msggener": 3, "n": 3, "read": 3, "arg": [3, 13], "default": 3, "between": [3, 11], "kei": 3, "valu": [3, 4, 13], "export": 3, "data": 3, "return": [3, 4, 13], "_description_": 3, "yield": 3, "iter": 3, "bp": 3, "md": 3, "context": [3, 4], "configur": [3, 15], "either": [3, 14], "blueskycontext": [3, 4], "go": [3, 8], "all": [3, 4, 6, 7], "them": [3, 4, 9, 10], "detect": 3, "thei": [3, 4, 18], "At": [3, 4], "point": 3, "inspect": 3, "hint": [3, 13], "which": [3, 4, 5, 11, 14], "build": [3, 12, 13], "pydant": [3, 4], "model": [3, 4], "other": 3, "word": 3, "someth": [3, 4, 6, 11], "like": [3, 4, 9], "basemodel": [3, 4], "class": [3, 4], "countparamet": 3, "config": 3, "arbitrary_types_allow": 3, "true": [3, 13], "illustr": 3, "purpos": [3, 18], "onli": 3, "actual": [3, 4], "object": [3, 4], "resembl": 3, "construct": 3, "memeori": 3, "store": 3, "On": 3, "worker": 3, "servic": [3, 15, 17], "A": 3, "user": [3, 17], "send": [3, 4], "form": [3, 4], "json": [3, 4, 7], "mai": 3, "look": [3, 4, 9], "param": [3, 4], "andor": [3, 4], "pilatu": [3, 4], "3": [3, 4, 13, 14, 22], "0": [3, 4], "intern": [3, 4, 21], "queue": 3, "soon": 3, "earlier": 3, "function": [3, 4, 9, 13, 18], "itself": 3, "out": [3, 4], "up": [3, 4, 6, 12], "while": [3, 6], "publish": [3, 8], "chang": [3, 5, 6, 7, 9, 11, 17], "state": [3, 4], "status": 3, "within": 3, "e": [3, 4, 5, 7, 9, 10, 14], "g": [3, 4], "when": [3, 4, 6, 14], "motor": 3, "posit": 3, "document": [3, 5, 6, 12, 14, 20], "emit": 3, "start": [3, 20], "finish": 3, "fail": [3, 9], "If": [3, 5, 6, 7, 22], "occur": 3, "dure": 3, "stage": 3, "onward": 3, "sent": 3, "back": [3, 17], "over": [3, 4], "futur": 4, "my_plan": 4, "b": 4, "becom": 4, "myplanmodel": 4, "That": 4, "wai": [4, 15, 20], "pars": 4, "howev": 4, "must": 4, "cover": 4, "where": [4, 10, 11], "doesn": 4, "t": [4, 6, 18], "simpl": 4, "primit": 4, "instead": [4, 6, 19], "ophyd": 4, "cannot": 4, "network": 4, "becaus": 4, "string": 4, "repres": [4, 18], "id": 4, "time": [4, 6, 7], "suppos": 4, "For": [4, 13], "exampl": [4, 13], "should": [4, 6, 22], "replac": 4, "befor": [4, 6], "apischema": 4, "had": 4, "ideal": 4, "featur": [4, 22], "call": [4, 18], "convers": 4, "util": 4, "similar": 4, "enabl": 4, "dynam": 4, "roughli": 4, "valdiate_b": 4, "self": 4, "val": 4, "ctx": 4, "find_devic": 4, "place": [4, 6], "level": 4, "my_weird_plan": 4, "c": 4, "dict": 4, "d": 4, "set": [4, 6, 7, 13], "appli": 4, "specif": 4, "field": 4, "insuffici": 4, "here": [4, 20], "help": [4, 18], "could": 4, "rather": 4, "than": 4, "essenti": 4, "shim": 4, "work": [4, 20], "particular": 4, "those": [4, 7], "support": 4, "nest": 4, "mention": 4, "detet": 4, "compar": 4, "annot": 4, "suppli": [4, 8], "caller": 4, "each": [4, 7], "item": 4, "you": [5, 6, 7, 8, 9, 10, 14, 15, 22], "base": 5, "directori": [5, 13], "tox": [5, 7, 9, 10, 14], "static": [5, 12, 13, 14], "pull": [5, 6, 11, 19], "docstr": [5, 13], "standard": [5, 6, 12], "built": [5, 19], "html": 5, "open": [5, 6, 14], "local": [5, 14], "web": 5, "brows": 5, "firefox": 5, "index": [5, 20], "process": [5, 13], "watch": 5, "your": [5, 6, 15], "rebuild": 5, "whenev": 5, "reload": 5, "browser": 5, "page": [5, 8, 13], "view": 5, "localhost": 5, "http": [5, 8, 11, 17, 22], "8000": 5, "make": [5, 6, 12], "sourc": [5, 10, 14, 15, 17, 22], "too": 5, "tell": [5, 7], "src": 5, "most": [6, 18], "welcom": 6, "github": [6, 8, 11, 14, 17, 19, 22], "pleas": [6, 8, 13], "check": [6, 7, 9, 10, 11, 13, 14], "file": [6, 7, 10], "one": [6, 9, 18], "great": 6, "idea": 6, "involv": 6, "big": 6, "ticket": 6, "want": 6, "sure": 6, "don": 6, "spend": 6, "might": 6, "fit": 6, "scope": 6, "offer": 6, "ask": 6, "question": 6, "share": 6, "end": 6, "obviou": 6, "close": [6, 11], "rais": 6, "100": 6, "librari": [6, 17, 20], "bug": 6, "free": 6, "significantli": 6, "reduc": 6, "easili": 6, "caught": 6, "remain": 6, "same": [6, 8], "improv": [6, 18], "contain": [6, 13, 14, 15, 17, 20], "inform": [6, 18], "environ": [6, 12, 14], "test": [6, 12], "black": [7, 13], "flake8": [7, 13], "isort": [7, 13], "under": [7, 14], "command": [7, 15], "Or": 7, "instal": [7, 12, 15, 17, 19, 20], "hook": 7, "do": [7, 10], "git": [7, 11, 14, 22], "report": [7, 9], "reformat": 7, "repositori": [7, 13], "likewis": 7, "get": [7, 8, 12, 14, 19], "manual": 7, "formatt": 7, "save": 7, "highlight": [7, 10], "editor": 7, "window": 7, "checklist": 8, "choos": [8, 14], "pep440": 8, "compliant": 8, "pep": 8, "org": 8, "0440": 8, "draft": 8, "click": [8, 14, 15], "tag": 8, "chose": 8, "note": [8, 20], "review": 8, "edit": 8, "titl": [8, 13], "push": 8, "branch": 8, "effect": 8, "except": 8, "find": 9, "coverag": 9, "commandlin": [9, 22], "cov": 9, "xml": 9, "stomp": 9, "connect": 9, "live": 9, "activemq": 9, "broker": 9, "present": 9, "inconveni": 9, "wish": 9, "unrel": 9, "avoid": 9, "still": 9, "ci": 9, "noth": 9, "slip": 9, "crack": 9, "definit": 10, "without": 10, "potenti": 10, "issu": 10, "match": 10, "merg": 11, "python3": [11, 14, 22], "pip": [11, 14, 17, 22], "skeleton": 11, "structur": 11, "mean": 11, "keep": 11, "techniqu": 11, "sync": 11, "multipl": 11, "latest": 11, "version": [11, 15, 19, 21], "rebas": 11, "fals": 11, "com": [11, 14, 22], "diamondlightsourc": [11, 14, 17, 19, 22], "conflict": 11, "indic": 11, "area": 11, "setup": [11, 14, 15], "more": [11, 14, 18, 20], "detail": 11, "split": [12, 17, 20], "four": [12, 18, 20], "categori": [12, 20], "access": [12, 20], "side": [12, 20], "bar": [12, 20], "contribut": [12, 17], "doc": [12, 13, 14], "sphinx": [12, 13, 14], "pytest": [12, 14], "analysi": [12, 13, 14], "mypi": [12, 13, 14], "lint": [12, 13, 14], "pre": [12, 13, 14, 19], "commit": [12, 13, 14], "tool": [12, 13], "releas": [12, 17, 19, 20, 22], "practic": [12, 20], "step": [12, 14, 20], "dai": 12, "dev": [12, 14], "architectur": 12, "decis": 12, "record": 12, "lifecycl": 12, "why": [12, 20], "technic": [12, 18, 20], "materi": [12, 20], "defin": 13, "conform": 13, "format": 13, "style": 13, "order": [13, 18], "how": [13, 18], "guid": [13, 17, 18], "napoleon": 13, "extens": 13, "As": 13, "googl": 13, "consid": 13, "signatur": 13, "func": 13, "arg1": 13, "arg2": 13, "bool": 13, "summari": 13, "line": [13, 15], "extend": 13, "descript": 13, "extract": 13, "underlin": 13, "convent": 13, "headl": 13, "head": 13, "2": [13, 17], "minim": 14, "first": 14, "host": [14, 15], "machin": 14, "venv": [14, 15, 22], "8": [14, 22], "later": [14, 22], "vscode": [14, 15], "virtualenv": 14, "cd": 14, "m": [14, 22], "bin": [14, 15, 22], "activ": [14, 15, 22], "devcontain": 14, "reopen": 14, "prompt": 14, "epic": 14, "complex": 14, "integr": 14, "podman": [14, 15], "graph": 14, "packag": 14, "tree": 14, "pipdeptre": 14, "now": [14, 22], "p": 14, "parallel": 14, "assum": 15, "instanc": 15, "simplest": 15, "via": 15, "docker": [15, 19], "rm": 15, "net": 15, "rmohr": 15, "5": 15, "15": 15, "9": 15, "alpin": 15, "insid": 15, "virtual": 15, "navig": 15, "debug": 15, "left": 15, "hand": 15, "menu": 15, "select": 15, "green": 15, "button": 15, "lightweight": 17, "applic": 17, "pypi": 17, "io": [17, 19], "todo": 17, "talk": 17, "about": [17, 20], "automag": 17, "endpoint": 17, "section": 17, "develop": 17, "grand": 18, "unifi": 18, "theori": 18, "david": 18, "la": 18, "There": 18, "secret": 18, "understood": 18, "write": 18, "good": 18, "softwar": [18, 22], "isn": 18, "thing": 18, "tutori": 18, "explan": 18, "differ": 18, "approach": 18, "creation": 18, "understand": 18, "implic": 18, "often": 18, "immens": 18, "depend": [19, 22], "alreadi": 19, "avail": 19, "ghcr": 19, "typic": 20, "usag": 20, "experienc": 20, "__version__": 21, "calcul": 21, "pypa": 21, "setuptools_scm": 21, "recommend": 22, "interfer": 22, "path": 22, "interfac": 22}, "objects": {"": [[21, 0, 0, "-", "blueapi"]], "blueapi.blueapi": [[21, 1, 1, "", "__version__"]]}, "objtypes": {"0": "py:module", "1": "py:data"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "data", "Python data"]}, "titleterms": {"architectur": [0, 1, 2], "kei": 0, "compon": 0, "The": 0, "blueskycontext": 0, "object": 0, "worker": [0, 15], "servic": 0, "decis": [1, 2], "record": [1, 2], "1": 2, "statu": 2, "context": 2, "consequ": 2, "lifecycl": 3, "plan": 3, "load": 3, "registr": 3, "startup": 3, "request": 3, "valid": [3, 4], "execut": 3, "type": 4, "requir": 4, "solut": 4, "implement": 4, "detail": 4, "build": [5, 14], "doc": 5, "us": [5, 7, 9, 10], "sphinx": 5, "autobuild": 5, "contribut": 6, "project": 6, "issu": [6, 7], "discuss": 6, "code": [6, 13], "coverag": 6, "develop": [6, 12, 14, 15], "guid": [6, 12, 20], "run": [7, 9, 10, 15, 19], "lint": 7, "pre": 7, "commit": 7, "fix": 7, "vscode": 7, "support": 7, "make": 8, "releas": 8, "test": [9, 14], "pytest": 9, "skip": 9, "messag": 9, "bu": 9, "static": 10, "analysi": 10, "mypi": 10, "updat": 11, "tool": 11, "tutori": [12, 20], "how": [12, 17, 20], "explan": [12, 20], "refer": [12, 20], "standard": 13, "document": [13, 17, 18], "instal": [14, 22], "clone": 14, "repositori": 14, "depend": 14, "see": 14, "what": 14, "wa": 14, "environ": [15, 22], "start": [15, 19], "activemq": 15, "blueski": 15, "api": [16, 21], "index": 16, "blueapi": [17, 21], "i": 17, "structur": 17, "about": 18, "contain": 19, "user": 20, "check": 22, "your": 22, "version": 22, "python": 22, "creat": 22, "virtual": 22, "librari": 22}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architecture": [[0, "architecture"]], "Key Components": [[0, "key-components"]], "The BlueskyContext Object": [[0, "the-blueskycontext-object"]], "The Worker Object": [[0, "the-worker-object"]], "The Service Object": [[0, "the-service-object"]], "Architectural Decision Records": [[1, "architectural-decision-records"]], "1. Record architecture decisions": [[2, "record-architecture-decisions"]], "Status": [[2, "status"]], "Context": [[2, "context"]], "Decision": [[2, "decision"]], "Consequences": [[2, "consequences"]], "Lifecycle of a Plan": [[3, "lifecycle-of-a-plan"]], "Loading and Registration": [[3, "loading-and-registration"]], "Startup": [[3, "startup"]], "Request": [[3, "request"]], "Validation": [[3, "validation"]], "Execution": [[3, "execution"]], "Type Validators": [[4, "type-validators"]], "Requirement": [[4, "requirement"]], "Solution": [[4, "solution"]], "Implementation Details": [[4, "implementation-details"]], "Build the docs using sphinx": [[5, "build-the-docs-using-sphinx"]], "Autobuild": [[5, "autobuild"]], "Contributing to the project": [[6, "contributing-to-the-project"]], "Issue or Discussion?": [[6, "issue-or-discussion"]], "Code coverage": [[6, "code-coverage"]], "Developer guide": [[6, "developer-guide"]], "Run linting using pre-commit": [[7, "run-linting-using-pre-commit"]], "Running pre-commit": [[7, "running-pre-commit"]], "Fixing issues": [[7, "fixing-issues"]], "VSCode support": [[7, "vscode-support"]], "Make a release": [[8, "make-a-release"]], "Run the tests using pytest": [[9, "run-the-tests-using-pytest"]], "Skip the message bus tests": [[9, "skip-the-message-bus-tests"]], "Run static analysis using mypy": [[10, "run-static-analysis-using-mypy"]], "Update the tools": [[11, "update-the-tools"]], "Developer Guide": [[12, "developer-guide"]], "Tutorials": [[12, null], [20, null]], "How-to Guides": [[12, null], [20, null]], "Explanations": [[12, null], [20, null]], "Reference": [[12, null], [20, null]], "Standards": [[13, "standards"]], "Code Standards": [[13, "code-standards"]], "Documentation Standards": [[13, "documentation-standards"]], "Developer install": [[14, "developer-install"]], "Clone the repository": [[14, "clone-the-repository"]], "Install dependencies": [[14, "install-dependencies"]], "See what was installed": [[14, "see-what-was-installed"]], "Build and test": [[14, "build-and-test"]], "Run in a Developer Environment": [[15, "run-in-a-developer-environment"]], "Start ActiveMQ": [[15, "start-activemq"]], "Start Bluesky Worker": [[15, "start-bluesky-worker"]], "API Index": [[16, "api-index"]], "blueapi": [[17, "blueapi"], [21, "blueapi"]], "How the documentation is structured": [[17, "how-the-documentation-is-structured"]], "About the documentation": [[18, "about-the-documentation"]], "Run in a container": [[19, "run-in-a-container"]], "Starting the container": [[19, "starting-the-container"]], "User Guide": [[20, "user-guide"]], "API": [[21, "module-blueapi"]], "Installation": [[22, "installation"]], "Check your version of python": [[22, "check-your-version-of-python"]], "Create a virtual environment": [[22, "create-a-virtual-environment"]], "Installing the library": [[22, "installing-the-library"]]}, "indexentries": {"blueapi": [[21, "module-blueapi"]], "blueapi.__version__ (in module blueapi)": [[21, "blueapi.blueapi.__version__"]], "module": [[21, "module-blueapi"]]}})