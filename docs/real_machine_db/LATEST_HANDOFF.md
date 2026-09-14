更新日: 2026-09-14

## 現在地点
- recordCount: **1737**
- latestRecordAdded: **L 絶対衝激～PLATONIC HEART～ — No.1737**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-16_l-zettai-shougeki-platonic-heart.md`
- chronologicalFrontier: **2025-06-16**
- schema: **resetBehavior v0.7**
- status: **2025-06-16_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1736実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1737 `L 絶対衝激～PLATONIC HEART～` を追加し、性能コア + resetBehavior v0.7を保存。
- HAZUSE、P-WORLD導入カレンダー、情報島の過去新台一覧で2025-06-16のパチスロ新台は同機1機で一致。PB・別型式・地域先行・延期/段階導入の追加canonical候補も今回の再監査範囲では確認されず、2025-06-16境界をCLOSED 1/1とした。

## No.1737 — L 絶対衝激～PLATONIC HEART～
- path: `docs/real_machine_db/machines/2025-06-16_l-zettai-shougeki-platonic-heart.md`
- manufacturer: **スパイキー（製造） / フィールズ（発売発表）**
- formalModel: **L絶対衝激TK**
- inspectionCode: **4S1524**
- releaseDate: **2025-06-16**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.3 / 100.2 / 104.1 / 107.4 / 110.2%**
- bonusCombined: **1/163.0 / 1/162.2 / 1/161.4 / 1/156.0 / 1/146.3 / 1/139.7**
- AT初当り: **1/336.3 / 1/328.2 / 1/318.6 / 1/299.4 / 1/278.8 / 1/264.7**
- base: **約36.7G/50枚**
- netIncrease: **AT約0.3枚/G**
- basicPayout: **PLATONIC BONUS約200枚 / BATTLE BONUS約50枚 / CZ 5G+α・AT期待度約50% / AT 1セット30G**
- coreStatus: **COMPLETE_CORE**

### No.1737 resetBehavior v0.7
- 設定変更: **有利区間RESET / 天井RESET / 内部状態RESET**。
- 据え置き: **有利区間CARRY_OVER / 天井CARRY_OVER / 内部状態CARRY_OVER**。
- 通常天井はボーナス/AT終了後 **900G+α**。設定変更後も **900G+α**で固定短縮なし。
- 純電源OFF→ONは後発機種別解析で **天井・内部状態CARRY_OVER、見た目0Gスタート**。ただし高優先比較表で純電断独立列を固定できないため `ANALYSIS_SINGLE`。
- 純電断時の有利区間直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の朝一高確、専用モード、初当たり/CZ優遇率、短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常営業中のエンディング/エンディングボーナス後の有利区間リセットでは内部10Gコンティニュー状態へ移行するが、解析上 **設定変更時を除く**。朝一恩恵には混入しない。
- 変更判別: 前日G数把握時、実消化900G+αより浅い位置で天井発動なら据え置き推測材料。本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

### No.1737 source maturity / missing
- 2025年時点の解析には設定変更時の追加優遇を `調査中` とする資料が残る一方、2026年更新の後発解析では「特有の短縮恩恵なし / 朝一ゾーンなし」と整理。具体的優遇数値は発見できず、推測せず `SOURCE_MATURITY_NOTE` として保持。
- 純電源OFF→ON時の有利区間直接契約、本機固有ガックン、朝一専用モード具体値: `UNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2025-06-16境界 — CLOSED 1/1
1. L 絶対衝激～PLATONIC HEART～ — No.1737 DONE

boundaryAudit:
- HAZUSE 2025年6月導入一覧: 6月16日のパチスロは同機1機。
- P-WORLD導入カレンダー: 2025/06/16新台パチスロとして同機を掲載。
- パチンコ・パチスロ情報島「過去の新台情報」: 2025年6月16日のスロットは同機1機。
- 今回確認範囲でPB・別型式・地域先行専用機の追加canonical候補なし。

## 次回再開地点
- 最新mainを再同期しNo.1737と本handoffを確認。
- 2025年6月本線は6/16で終了。次は **2025-07-07群**。
- 1geki/P-Summa/情報島で7/7のパチスロ5機を確認。次は **No.1738候補「LBパチスロ ヱヴァンゲリヲン ～約束の扉～」— 2025-07-07** から開始する。
- 同日候補キュー: `LBパチスロ ヱヴァンゲリヲン ～約束の扉～ → わたしの幸せな結婚 → アレックス ブライト → ハイビリターン-30 → LBトリプルクラウン`。
- 5候補処理後、PB・別型式・地域先行・延期/段階導入を再監査して2025-07-07境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1737を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- P-WORLD導入カレンダー: https://www.p-world.co.jp/database/machine/introduce_calendar.cgi/1000?mode=before
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- 1geki 2025年7月新台スケジュール: https://1geki.jp/newmachinecalender/202507/
- P-Summa 2025年7月新台一覧: https://psumma.jp/pachislo/66443/

### No.1737 L 絶対衝激～PLATONIC HEART～
- 公式PV: https://www.youtube.com/watch?v=qRt5rfrbjeQ
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/31155/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/4S1524/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87398/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87387/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87389/
- 1geki: https://1geki.jp/slot/l_zetai/
- 1geki 天井/朝一: https://1geki.jp/slot/l_zetai/3/
- なな徹: https://nana-press.com/kaiseki/machine/982/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/982/30178/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/982/30200/
- なな徹 エンディング/有利区間: https://nana-press.com/kaiseki/machine/982/30194/
- 後発解析（純電断補助）: https://www.kaku6.jp/slot/zettai/
