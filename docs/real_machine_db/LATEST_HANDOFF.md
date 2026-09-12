更新日: 2026-09-12

## 現在地点
- recordCount: **1437**
- latestRecordAdded: **ニューパルサーDX3 — No.1437**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-10-04_new-pulsar-dx3.md`
- chronologicalFrontier: **2021-10-04**
- frontierLatestMachine: **ニューパルサーDX3 — No.1437**
- schema: **resetBehavior v0.7**
- status: **2021-10-04_GROUP_OPEN_4_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1436「SLOTタブー・タトゥー」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1437「ニューパルサーDX3」を追加。
- 2021-10-04群は既知5機のうち4機処理済み。残りは「パチスロ かまいたちの夜」。
- 遡及resetBehavior QAは本線を優先し、カーソル `2007-05_kemonocchi.md`（けものっち!）を維持。

## No.1437 — ニューパルサーDX3
- path: `docs/real_machine_db/machines/2021-10-04_new-pulsar-dx3.md`
- manufacturer: **山佐ネクスト**
- formalModel: **SニューパルサーDX-VYTDD**
- certificationNumber: **0S1757**
- releaseDate: **2021-10-04**
- generation/system: **6号機 / ノーマル / 純ボーナス / 完全告知**
- settings: **1 / 2 / 3 / 4 / 6**
- payoutRate: **97.4 / 98.4 / 100.3 / 105.0 / 108.3%**
- BIG: **1/318.1 / 1/315.1 / 1/306.2 / 1/290.0 / 1/273.1**
- REG: **1/356.2 / 1/348.6 / 1/337.8 / 1/292.6 / 1/273.1**
- combined: **1/168.0 / 1/165.5 / 1/160.6 / 1/145.6 / 1/136.5**
- baseGamesPer50: **約43G/50枚（設定1）**
- basicPayout: **BIG最大259枚 / REG固定104枚**
- normalCeiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABILITY_CORE_WITH_UNVERIFIED_DISPLAY_RESET_DETAILS**

### resetBehavior v0.7 — No.1437
- **設定変更**: 純ボーナスノーマル機でゲーム数天井・AT/ARTモード・高確/CZ状態・有利区間の朝一進行はNOT_APPLICABLE。設定変更専用の短縮天井・専用当選率優遇は確認されない。
- **据え置き**: 引き継ぐべき天井・AT/ARTモード・有利区間進行はNOT_APPLICABLE。
- **純電源OFF→ON**: 出玉に関わる天井・AT/ARTモード・有利区間進行はNOT_APPLICABLE。BGM変化等の演出履歴条件は当時必勝本でも設定変更/電断とも『現在調査中』で、再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
- **天井**: 非搭載。設定変更専用短縮天井もNOT_APPLICABLE。
- **朝一恩恵/不利**: 後年整理資料でも『リセット恩恵は特になし』。出玉面の専用不利要素も確認されない。
- **変更判別**: 有利区間ランプ・液晶ステージ型の変更判別はNOT_APPLICABLE。本機固有ガックン条件・発生率は再探索後もUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 設定変更専用の朝一当選率・モード振り分け等の公開固定値は確認されない。通常ボーナス確率は性能コアに保存。

## 2021-10-04群 — OPEN
1. **ファンキージャグラー2 — No.1434 / DONE**
2. **パチスロツインエンジェルPARTY — No.1435 / DONE**
3. **SLOTタブー・タトゥー — No.1436 / DONE**
4. **ニューパルサーDX3 — No.1437 / DONE**
5. **パチスロ かまいたちの夜 — No.1438候補 / NEXT**
- No.1438処理後、全メーカー・PB・地域先行・30Φ/別型式・延期/段階導入を再監査し、追加未処理がなければCLOSEDへ移行する。

## 次回本線の再開地点
- **2021-10-04群 / No.1438候補: パチスロ かまいたちの夜**。
- 性能コア＋resetBehavior v0.7を収集し、既存No.1434〜1437を無駄に再調査しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）**。

## GitHub保存
- No.1437追加 commit: `219f54a4eaa20966b40d0a36ce2384b466f3ae7b`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1437 ニューパルサーDX3
- https://yugi-nippon.com/pachinko-new-machine/post-44739/
- https://p-bomb.co.jp/industry/new-machine/1519/
- https://www.nikkansports.com/amusement/pachislot/news/202107200000604.html
- https://hazuse.com/machine/pachislot/0S1757/
- https://opt.p-world.co.jp/machine/database/9439
- https://1geki.jp/slot/s_newpal_dx3/
- https://chonborista.com/slot/yamasa-slot/145987/
- https://ichikatsu.com/newpulsardx3/
- https://p.hisshobon.jp/machine/3692/1/83152
- https://pachisuro100.com/reset/

### 2021-10-04群境界（継続）
- https://ichikatsu.com/newslot/
- https://news.p-world.co.jp/articles/18030/nippon
- https://lon-lon.jp/senkawa/10%E6%9C%88%E6%96%B0%E8%A3%85%E9%96%8B%E5%BA%97%E2%91%A0/
