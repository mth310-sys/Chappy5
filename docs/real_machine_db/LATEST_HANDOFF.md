更新日: 2026-09-13

## 現在地点
- recordCount: **1533**
- latestRecordAdded: **SLOTとある科学の超電磁砲 — No.1533**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-11-07_slot-toaru-kagaku-no-railgun.md`
- chronologicalFrontier: **2022-11-07**
- frontierLatestMachine: **SLOTとある科学の超電磁砲 — No.1533**
- schema: **resetBehavior v0.7**
- status: **2022-11-07_GROUP_CLOSED_4_OF_4 / NEXT_2022-11-21_SMARTSLOT_LAUNCH_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1532 `パチスロ鉄拳4アルティメットデビルVer.` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- 前handoffの次候補 `SLOTとある科学の超電磁砲` をNo.1533として性能コア + resetBehavior v0.7で追加。
- 型式 `Sとある科学の超電磁砲FB`、検定番号 `2S0622`、藤商事、2022-11-07導入をメーカー公式・公安委員会告示/検定再掲・業界資料・複数解析で照合。
- 設定1〜6の機械割97.5/98.5/100.4/104.6/108.4/111.5%、超電磁砲CHANCE 1/295.2→1/213.7、Eternal Party RUSH 1/556.6→1/325.6、約36G/50枚、純増約2.7枚/G。
- 超電磁砲CHANCE間天井700G+α、Eternal Party RUSH間天井1290G+α。
- 設定変更は有利区間・天井・内部状態・とあるポイント・とあるパネルRESET。据え置きはCARRY_OVER。
- 純電源OFF→ONは内部の天井/有利区間/状態/ポイント/パネルをCARRY_OVERする一方、朝一表示は御坂美琴ステージ・0pt・全ゲコ太パネルとなるため、設定変更と見た目が近い。表示と内部契約を分離して保存。
- 設定変更後1回目のCZ「真剣抽選T」は約60%（全設定共通）。AT終了後1回目も約60%。通常を含む実質出現率18.0〜35.0%とは定義を分離。
- 設定変更専用の短縮天井は確認されず、通常700G+α / RUSH間1290G+αを0から再計算。
- 本機固有ガックン条件/発生率、設定変更専用の名称付きモード完全振り分けは検索語・資料系統を変えても固定できずUNVERIFIED/PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH。

## No.1533 — SLOTとある科学の超電磁砲
- manufacturer: **藤商事**
- formalModel: **Sとある科学の超電磁砲FB**
- inspectionCode: **2S0622**
- releaseDate: **2022-11-07**
- generation/system: **6.5号機 / コンプリート機能搭載 / AT / CZ→チャンスAT→メインAT**
- payoutRate: **97.5 / 98.5 / 100.4 / 104.6 / 108.4 / 111.5%**（設定1〜6）
- 真剣抽選CZ: **1/107.7 → 1/103.4**
- 超電磁砲CHANCE: **1/295.2 → 1/213.7**
- Eternal Party RUSH: **1/556.6 → 1/325.6**
- baseGamesPer50: **約36G/50枚**
- netIncrease: **約2.7枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN**

### resetBehavior v0.7 — No.1533
- **設定変更**: 有利区間・天井・内部状態・とあるポイント・とあるパネルRESET。
- **据え置き**: 有利区間・天井・内部状態・ポイント・パネルCARRY_OVER。
- **純電源OFF→ON**: 内部はCARRY_OVER。表示は御坂美琴ステージ / 0pt / 全ゲコ太パネルに戻る。
- **ゲーム数・天井**: 超電磁砲CHANCE間700G+α、Eternal Party RUSH間1290G+α。設定変更専用短縮はNONE_CONFIRMED_AFTER_RESEARCH。
- **モード・状態**: 内部状態RESET。名称付き朝一モード完全振り分けは未公開/未固定。
- **有利区間**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。エンディング到達はリセット契機。
- **朝一恩恵**: 設定変更後1回目CZの上位CZ「真剣抽選T」出現率約60%（全設定共通）。
- **朝一不利**: 前日の天井・状態・ポイント・パネル蓄積を失う。追加専用不利はNONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 設定変更/据え置きとも朝一表示が同様で液晶初期表示では判別不可。ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 初回真剣抽選T 約60%（全設定共通）。

## 2022-11-07群 — CLOSED 4/4 canonical
1. **花火絶景（ミズホ）** — No.1530 済
2. **ラストユートピア（ピーセカンド / パイオニア）** — No.1531 済
3. **パチスロ鉄拳4アルティメットデビルVer.（山佐 / 山佐ネクスト）** — No.1532 済
4. **SLOTとある科学の超電磁砲（藤商事）** — No.1533 済

### 境界監査
- 2022年11月導入一覧・11/7一覧を再確認し、上記4機を本線canonicalとしてCLOSED。
- `パチスロ幼女戦記（サミー）` は初期予定2022-11-07から延期され、実導入2022-12-05。11/7群には含めない。
- PB・別型式・30Φ派生・地域先行・延期/段階導入を再探索したが、11/7本線へ追加すべき未処理機は今回確認されず。

## 次群候補 — 2022-11-21 スマスロ市場導入開始
業界資料で11/21導入の初期スマスロ3機を確認。
1. **Lバキ 強くなりたくば喰らえ!!!（オリンピア/平和系）** ← No.1534候補 / 次回最優先
2. **パチスロ 革命機ヴァルヴレイヴ（SANKYO）**
3. **スマスロリノヘブン（山佐ネクスト）**

- 11/21はスマートパチスロ市場導入開始日。上記3機を処理後、同日メダル機/PB/別型式/地域先行・延期を再監査して群CLOSED可否を判定する。

## 遡及QA
- `docs/real_machine_db/machines/2007-03_pikagorou-v-b.md` はmain上ですでに2026-09-11 QA済みで `coreStatus: COMPLETE_CORE / resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED`。
- 新規本線を止めず、必要時にピカゴロウV-Bより後の最初の未QA/PARTIALレコードをmainから再探索する。

## 今回の主要資料
### SLOTとある科学の超電磁砲
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_railgun/
- PiDEA X / 東京都公安委員会検定再掲: https://www.pidea.jp/articles/1663809222
- 広島県公安委員会告示第58号: https://www.pref.hiroshima.lg.jp/soumu/kenpo-pdf/2022/t069/2022-t069-010.pdf
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/21757/yugitsushin
- グリーンべると: https://web-greenbelt.jp/post-64462/
- 一撃 機種概要: https://1geki.jp/slot/s_railgun/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_railgun/3/
- 一撃 真剣抽選T: https://1geki.jp/slot/s_railgun/46/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/446/12372/
- なな徹 設定判別: https://nana-press.com/kaiseki/machine/446/12375/
- パチスロ必勝本系: https://p.hisshobon.jp/vpage/2491/1
- 2022新台一覧監査: https://ichikatsu.com/newslot2022/

### 2022-11-21境界
- グリーンべると「スマスロとメダル機の共存時代のポイント」: https://web-greenbelt.jp/post-65236/
- グリーンべると「スマスロの市場導入スタート」: https://web-greenbelt.jp/post-66262/
- グリーンべると ヴァルヴレイヴ11/21: https://web-greenbelt.jp/post-66230/
- グリーンべると リノヘブン11/21: https://web-greenbelt.jp/post-66232/

## 保存コミット
- No.1533追加: `af3bd9a03150293643b5f41d1eca52907d555a40`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1534候補 `Lバキ 強くなりたくば喰らえ!!!`（2022-11-21）から性能コア + resetBehavior v0.7を収集する。その後 `パチスロ 革命機ヴァルヴレイヴ` → `スマスロリノヘブン` の順で初期スマスロ群を処理し、11/21同日群をメダル機/PB/別型式/地域先行・延期まで再監査する。**
