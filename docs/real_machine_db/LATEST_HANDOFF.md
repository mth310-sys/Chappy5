更新日: 2026-09-12

## 現在地点
- recordCount: **1440**
- latestRecordAdded: **CCエンジェル — No.1440**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-11-08_cc-angel.md`
- chronologicalFrontier: **2021-11-08**
- frontierLatestMachine: **CCエンジェル — No.1440**
- schema: **resetBehavior v0.7**
- status: **2021-11-08_GROUP_OPEN_2_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1439「パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1440「CCエンジェル」を追加。
- 公式製品/ニュース、当時業界記事、HAZUSE、P-WORLD、必勝本、解析サイトを横断し、型式・検定番号・設定別BIG/REG/合算・通常/完全攻略機械割・ベース・RT性能・天井非搭載を照合。
- 本機はリアルボーナス+RT機のため、AT/CZ機向けの天井短縮・モード・有利区間挙動を推測転記せずNOT_APPLICABLEを明示。
- 設定変更/据え置き/純電断時のRT状態・成立済みボーナス状態、本機固有ガックン/初期出目判別は、機種名・型式・メーカー・A PROJECT・関連検索語を組み替えて再探索したが直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。
- 遡及resetBehavior QAカーソルは今回本線優先のため動かさず、`2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）を維持。

## No.1440 — CCエンジェル
- path: `docs/real_machine_db/machines/2021-11-08_cc-angel.md`
- manufacturer: **メーシー / ユニバーサルエンターテインメント**
- formalModel: **S／CCエンジェル／CA**
- certificationNumber: **1S0647**
- releaseDate: **2021-11-08**
- generation/system: **6.1号機 / ノーマル / ボーナス+RT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- marketPayoutRate: **98.0 / 99.0 / 103.9 / 106.5%**
- fullStrategyPayoutRate: **99.1 / 100.2 / 105.2 / 108.0%**
- BIG: **1/264.3 / 1/262.1 / 1/248.2 / 1/237.4**
- REG: **1/343.1 / 1/322.8 / 1/270.8 / 1/237.4**
- bonusCombined: **1/149.3 / 1/144.7 / 1/129.5 / 1/118.7**
- baseGamesPer50: **約42〜42.1G/50枚（設定1）**
- netIncrease: **RT約0.2枚/G**
- basicPayout: **BIG最大206枚 / REG最大80枚 / BIG後30G固定RT**
- normalCeiling: **天井非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESET_PUBLIC_INFO_EXHAUSTED**

### resetBehavior v0.7 — No.1440
- **設定変更**: 天井G・AT/CZモードはNOT_APPLICABLE。RT状態/成立済みボーナス状態の本機固有処理はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井はNOT_APPLICABLE。RT状態/成立済みボーナス状態の扱いはUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井はNOT_APPLICABLE。RT状態/成立済みボーナス状態の扱いはUNVERIFIED_AFTER_RESEARCH。
- **天井/短縮**: 天井非搭載のためNOT_APPLICABLE。設定変更専用の短縮天井なし。
- **モード/状態**: 通常時AT/CZモード・高確低確はNOT_APPLICABLE。RT内部状態の変更時契約は未確認。
- **有利区間**: 朝一判断に使うAT系有利区間管理はNOT_APPLICABLEとして扱い、一般論を転記しない。
- **朝一恩恵/不利**: 設定変更専用の公開恩恵・不利要素・公開朝一数値は確認できず。
- **変更判別**: 本機固有のガックン、初期出目、表示による変更判別契約はUNVERIFIED_AFTER_RESEARCH。

## 2021-11-08群 — OPEN
1. **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439 / DONE**
2. **CCエンジェル — No.1440 / DONE**
3. **パチスロGANTZ極 THE SURVIVAL GAME — No.1441候補 / NEXT**
4. **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — 未処理**
5. **ハイハイシオサイ2 — 未処理**
- 群は未CLOSED。次回開始時に全メーカー・PB・地域先行・25/30Φ別型式・延期/段階導入を再監査し、既知候補の漏れ/重複がないことを確認して継続する。

## 次回本線の再開地点
- **2021-11-08群 / No.1441候補: パチスロGANTZ極 THE SURVIVAL GAME**。
- その後、戦国乙女 暁の関ヶ原-DARKNESS- → ハイハイシオサイ2の順に既知候補を処理し、同日群を横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）**。
- 今回は本線No.1440を優先したためカーソルを進めていない。

## GitHub保存
- No.1440追加 commit: `065c85c09dd1f7ffeedaa3b0c88c5253de3feecb`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1440 CCエンジェル
- https://www.universal-777.co.jp/news/20210906001513/
- https://www.universal-777.com/product/slot/cc_angel/
- https://web-greenbelt.jp/post-51334/
- https://hazuse.com/machine/pachislot/1S0647/genre/201/
- https://hazuse.com/machine/pachislot/1S0647/genre/203/
- https://www.slopachi-quest.com/article/ccangel-settei/
- https://hisshobon.news/analyze/4590/
- https://www.p-world.co.jp/machine/database/9484
