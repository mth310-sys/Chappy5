更新日: 2026-09-11

## 現在地点
- recordCount: **1278**
- latestRecordAdded: **ワンダフルジャック**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-08_wonderful-jack.md`
- chronologicalFrontier: **2019-04-08**
- frontierLatestMachine: **ワンダフルジャック — No.1278**
- schema: **resetBehavior v0.7**
- status: **2019-04-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1276を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoff指定の未処理 `マイフラワー-30` をNo.1277、続いて `ワンダフルジャック` をNo.1278として性能コア + resetBehavior v0.7で登録。
- 2019-04-08群をK-Navi、2019年導入一覧、4/8当時新台まとめ、メーカー/業界記事、個別解析で横断再監査。
- 新規本線は `ゴーゴージャグラー2 / マイフラワー-30 / ワンダフルジャック` の3機で一致。義風堂々!!～兼続と慶次～は既存No.1273の日付CONFLICT対象なので重複登録しない。
- 別型式/別スペック/PB/地域差の追加機は固定できず、4/8群をCLOSED。

## No.1277 — マイフラワー-30
- manufacturer: **北電子**
- formalModel: **`SマイフラワーKT-30`**
- certificationNumber: **`8S0852`**
- generation/system: **6号機 / AT / 擬似ボーナス / 30Φ / 32G CZ・シナリオ管理**
- releaseDate: **2019-04-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 初当たり: **1/210 / 1/200 / 1/190 / 1/180 / 1/170 / 1/160**
- 機械割: **98.1 / 99.3 / 100.7 / 102.6 / 104.8 / 108.0%**
- baseGamesPer50: **50.0G（全設定共通）**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 60G 約180枚 / REG 20G 約60枚**
- ceiling: **非搭載**
- normalGameSpecific: **ボーナス後32G CZ、初当たり後CZの2連目期待度約33%、3連目以降シナリオ管理**

### resetBehavior v0.7
- settingChange: **非有利区間へ移行**をDMMぱちタウンで確認。非有利区間後のモード/状態具体契約は一撃当時資料でも調査中。
- carryOver: 据え置き時の有利区間/CZ/シナリオ保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycle: 一撃当時資料は天井G/状態/モードすべて調査中。純電断契約は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため通常天井はNOT_APPLICABLE。
- modeAfterReset / stateAfterReset: 非有利区間移行以外の具体振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **設定変更時RESET / 非有利区間へ移行**。
- resetBenefits / penalties: 設定変更専用の公開短縮天井・初当たり優遇・不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有の有利区間ランプ/ガックン確定契約・発生率は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 設定変更専用のモード振り分け/当選率/恩恵率は `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

## No.1278 — ワンダフルジャック
- manufacturer: **岡崎産業**
- formalModel: **`ワンダフルジャック／W2`**
- certificationNumber: **`7S1921`**
- generation/system: **5.9号機 / ノーマルAタイプ / 技術介入あり**
- releaseDate: **2019-04-08**
- settings: **1 / 2 / 5 / 6**
- BIG: **1/288.7 / 1/276.5 / 1/263.2 / 1/247.3**
- REG: **1/436.9 / 1/409.6 / 1/383.3 / 1/348.6**
- 合算: **1/173.8 / 1/165.1 / 1/156.0 / 1/144.7**
- 機械割: **97.1 / 99.8 / 103.2 / 107.9%**
- baseGamesPer50: **約36.6〜37.7G**
- basicPayout: **BIG 312枚 / REG最大129枚**
- ceiling: **非搭載**
- technicalIntervention: REG中14枚役を1回取得。左チェリー狙い+REG技術介入で設定1でも100%超との解析はあるが完全攻略時設定別具体値は未固定。

### resetBehavior v0.7
- settingChange / carryOver / powerCycle: 天井/AT/CZ/通常モードはNOT_APPLICABLE。成立済みボーナス/ボーナス成立後リプレイ高確率状態の境界契約は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: 天井非搭載のためNOT_APPLICABLE。
- modeAfterReset / stateAfterReset: AT型モード/高低状態はNOT_APPLICABLE。特殊ボーナス成立状態のみ未固定。
- advantageousSectionReset: 5.9号機ノーマルのため本DB朝一管理はNOT_APPLICABLE。
- resetBenefits: ちょんぼりすたは**朝一恩恵なし**。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: モゲスロは「液晶なしで変更判断困難、ガックンが有効な筐体なら候補」とするのみ。本機固有の有効性/発生率/確定条件は未固定のため `POSSIBLE_GAKKUN_REFERENCE_ONLY_NONDETERMINISTIC`。
- numericResetData: `PUBLIC_NUMERIC_VALUE_NOT_FOUND / NOT_APPLICABLE`。

## 2019-04-08群 — CLOSED
### 登録済み
- No.1276 ゴーゴージャグラー2
- No.1277 マイフラワー-30
- No.1278 ワンダフルジャック

### 既存日付CONFLICT
- No.1273 戦国パチスロ 義風堂々!!～兼続と慶次～ — 2019-04-01 vs 2019-04-08。重複登録しない。

### 群監査
- K-Navi 2019年4月カレンダー、すろぱちくえすと2019年導入一覧、4/8当時新台まとめで4/8本線3機が一致。
- メーカー/業界記事と個別型式DBでも3機を照合。
- 別型式/別スペック/PB/地域差の追加機を固定できず **2019-04-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 次境界先行監査
- K-Navi 2019年4月カレンダーでは **2019-04-15にパチスロ新台なし**。
- 次のパチスロ導入群は **2019-04-22**。
- 複数一覧で `SLOTギャラガ / プレミアムハナハナ-30 / パチスロ黄門ちゃまV 女神盛-MEGAMORI-` の3機を確認。

## qualityNotes
- マイフラワー-30は北電子公式/HAZUSE/当時業界記事で北電子初の6号機ATとして固定。後年DBの世代誤分類表示は不採用。
- マイフラワーの「初当たり後32G CZ約33%」は通常ゲーム性の数値で、設定変更専用恩恵ではない。
- ワンダフルジャックは後年の低品質まとめに別機種値との混線があるため不採用。HAZUSE/K-Navi/パチマガスロマガ/当時業界記事/複数解析一致値をcanonical。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- 今回は新規時系列本線を優先し、遡及QA地点は変更していない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1278を再取得。
2. 2019-04-09〜04-21境界を短く再監査。4/15はK-Navi上パチスロ新台なし。
3. **2019-04-22群の `SLOTギャラガ` をNo.1279候補として登録。**
4. 続いて `プレミアムハナハナ-30`、`パチスロ黄門ちゃまV 女神盛-MEGAMORI-` を処理。
5. 4/22群を全メーカー/別型式/別スペック/PB/地域差まで横断監査してCLOSED判定。
6. 遡及QAは `2007-02_playboy-30.md` から再開。

## 主要出典 — 取得日 2026-09-11
### マイフラワー-30
- 北電子公式: https://www.kitadenshi.co.jp/slot/myflower-30/
- HAZUSE基本: https://hazuse.com/machine/pachislot/8S0852/genre/201/
- HAZUSE AT/CZ: https://hazuse.com/machine/pachislot/8S0852/genre/209/
- 一撃: https://1geki.jp/slot/s_mf30/
- 一撃 設定変更: https://1geki.jp/slot/s_mf30/3/
- DMMぱちタウン: https://p-town.dmm.com/machines/3377
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/78373/
- PiDEA X: https://www.pidea.jp/articles/%E3%80%8C%E3%82%B4%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B02%E3%80%8D%EF%BC%86%E5%88%9D6%E5%8F%B7%E6%A9%9F%E3%80%8C%E3%83%9E%E3%82%A4%E3%83%95%E3%83%A9%E3%83%AF%E3%83%BC30%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90
- グリーンべると: https://web-greenbelt.jp/00011057/

### ワンダフルジャック
- HAZUSE: https://hazuse.com/machine/pachislot/7S1921/
- K-Navi: https://p-kn.com/slot/3211/
- パチマガスロマガ ボーナス: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/81/h.php
- パチマガスロマガ 小役: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/81/c.php
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/80480/
- モゲスロ: https://moge-site.com/archives/21715
- すろぱちくえすと: https://www.slopachi-quest.com/article/wonderful-jack-settei/
- グリーンべると: https://web-greenbelt.jp/00011149/

### 群/次境界監査
- K-Navi 2019年4月カレンダー: https://p-kn.com/calendar/201904/
- すろぱちくえすと2019年導入一覧: https://www.slopachi-quest.com/article/2019-dounyuukishu/
- 4/8当時新台まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/04/08/%E3%80%90%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E7%B7%A8%E3%80%914%E6%9C%888%E6%97%A5%E5%B0%8E%E5%85%A5%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE%E3%80%81%E7%B0%A1%E6%98%93%E3%82%B9%E3%83%9A
- 4/22当時新台まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/04/22/%E3%80%90%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E7%B7%A8%E3%80%914%E6%9C%8822%E6%97%A5%E5%B0%8E%E5%85%A5%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE%E3%80%81%E7%B0%A1%E6%98%93%E3%82%B9%E3%83%9A
