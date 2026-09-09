更新日: 2026-09-09

## 現在地点
- recordCount: **1133**
- latestRecordAdded: **パチスロ セイクリッドセブン**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_sacred-seven.md`
- chronologicalFrontier: **2017-09-04**
- frontierLatestMachine: **パチスロ セイクリッドセブン — No.1133**
- schema: **resetBehavior v0.7**
- status: **2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1132「アメイジング・スパイダーマン」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1132件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN**。
- 前handoff最優先候補 **「パチスロ セイクリッドセブン」** を重複検索し、main上の未処理候補として調査。保存処理中に同パスが生成済みとなったため現物を再取得し、**No.1133**・performance core・resetBehavior v0.7が正しく存在することを確認したうえでhandoffを前進。
- 導入日は **2017-09-04**。パチビー、一撃、ちょんぼりすた、すろかい等で一致。グリーンべると2017-07-24業界記事は納品9月上旬予定。
- 型式は **セイクリッドセブン/XX**。2017-06-15の山佐検定通過記録にも同型式を確認。検定番号は表記揺れ・型式・7S・検定通過等へ再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 性能コア: 機械割 **96.9 / 99.1 / 100.8 / 104.2 / 106.1 / 110.3%**、ART初当たり **1/574.9 / 464.7 / 531.7 / 404.0 / 478.4 / 378.5〜378.6**、BIG **1/394.8 → 1/348.6**、REG **1/399.6 → 1/381.0**、ベース **約33G/50枚**。
- ART「セイクリッドラッシュ」は **1セット50G / 純増約1.3枚/G / ボーナス込み約1.8枚/G**。BIG **204枚**、SACRED BONUS **48枚**。
- 通常天井は **ボーナス及びART間999G+前兆**でART突入。
- resetBehavior v0.7: 設定変更時 **天井RESET / 内部状態RESELECT / モードRESELECT / 浜辺ステージ開始**。純電源OFF→ON時 **天井・内部状態・モードCARRYOVER / 浜辺ステージ開始**。一撃の直接比較表と期待値見える化の朝一比較で照合。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット後高確/超高確公開値: 設定1 **33.6 / 0.8%** → 設定6 **50.0 / 6.3%**。
- 設定変更時の白7高確移行率: **3.1 / 4.7 / 6.3 / 7.8 / 9.4 / 12.5%**。
- 設定変更・純電断とも浜辺開始のため、開始ステージ単独では変更判別不可。朝一の高状態示唆は統計的ヒントとして保持。本機固有ガックン/初期出目/ランプによる確定判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き・電源操作なしの独立操作表は固定できず `UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH`。純電源OFF→ONのCARRYOVER契約とは区別。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1133 — パチスロ セイクリッドセブン
- manufacturer: **山佐**
- releaseDate: **2017-09-04**
- formalModelName: **セイクリッドセブン/XX**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **天井RESET / 状態RESELECT / モードRESELECT / 浜辺開始**。
- pure power OFF→ON: **天井・状態・モードCARRYOVER / 浜辺開始**。
- stay setting: **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- normal ceiling: **ボーナス及びART間999G+前兆**。
- reset ceiling shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- setting-change high/very-high:
  - 設定1: **33.6 / 0.8%**
  - 設定2: **33.6 / 0.8%**
  - 設定3: **33.6 / 1.6%**
  - 設定4: **50.0 / 3.1%**
  - 設定5: **50.0 / 4.7%**
  - 設定6: **50.0 / 6.3%**
- setting-change white7-high: **3.1 / 4.7 / 6.3 / 7.8 / 9.4 / 12.5%**（設定1→6）。
- reset detection: **浜辺開始は変更/電断共通。本機固有の確定ガックン等はUNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — OPEN
登録済み:
1. **パチスロ北斗の拳 新伝説創造 — No.1127**
2. **ぱちスロAKB48 勝利の女神 — No.1128**
3. **回胴性ミリオンアーサー — No.1129**
4. **パチスロ笑ゥせぇるすまん3～笑撃のドーン～ — No.1130**
5. **SLOTデビルマンχ — No.1131**（導入日9/4 vs 9/19 CONFLICT）
6. **アメイジング・スパイダーマン — No.1132**
7. **パチスロ セイクリッドセブン — No.1133**

9/4候補からDEFER:
- **亜人** — 9/4表記あり。ただし業界記事の納品9/18予定 + HAZUSE/K-Navi/複数解析9/19が強く、2017-09-19群で処理予定。将来レコードでは9/4表記もCONFLICT保持。

次候補:
1. **YASUDA7**
2. **パチスロ ゴルゴ13**（2017年版。既存2006年版と混同禁止）
3. **蒼き鋼のアルペジオ -アルス・ノヴァ-** 等、資料によって9/4表記がある機種を地域導入/掲載定義差まで横断監査。

### YASUDA7 先行監査
- K-Navi、パチビーの2017-08-24発表記事、すろぱちくえすとで **2017-09-04導入**を確認。
- manufacturer: **JPS**。
- P-WORLDに型式 **YASUDA7 AA**、検定番号 **7S0923**。
- ノーマル完全告知、BIG312枚 / REG91枚、天井非搭載。次回は既存重複確認後、設定変更/据え置き/純電断/ガックン等を重点探索してNo.1134候補として処理。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1133を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1133を再取得。
2. **1133件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN** を正本として継続。
3. 最優先は **「YASUDA7」No.1134候補**。重複確認後、performance core + resetBehavior v0.7を収集。
4. 次に **パチスロ ゴルゴ13（2017版）**。2006年オリンピア版との混同禁止。
5. 9/4群を全メーカー・表記揺れ・地域導入差まで横断し、候補を順次登録してからCLOSED判定。
6. 「亜人」は **2017-09-19群候補としてDEFER**。9/4表記とのCONFLICTを保持して処理する。
7. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1133 パチスロ セイクリッドセブン
- 山佐ネクスト公式 機種情報: https://yamasa-next.co.jp/model_sc7/
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9488/greenbelt
- パチビー: https://www.pachibee.jp/machines/index/217080003
- P-WORLD: https://www.p-world.co.jp/machine/database/8462
- 一撃 基本: https://1geki.jp/slot/s_sarcred_seven/
- 一撃 天井/設定変更/電源OFF ON: https://1geki.jp/slot/s_sarcred_seven/3/
- 一撃 白7高確: https://1geki.jp/slot/s_sarcred_seven/44/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/42700/
- 期待値見える化: https://slotjin.com/zone/sacred7/
- すろかい: https://slotkaiseki.hatenablog.com/entry/seven
- 山佐検定通過機種整理: https://q-and-a.hatenablog.com/entry/%E5%B1%B1%E4%BD%90%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E

### No.1132 アメイジング・スパイダーマン — 前回主要出典
- HAZUSE: https://hazuse.com/machine/pachislot/7S0032/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/44939/

### 次候補 YASUDA7 先行監査
- K-Navi: https://p-kn.com/slot/2889/
- P-WORLD: https://www.p-world.co.jp/machine/database/8502
- パチビー発表記事: https://www.pachibee.jp/pparticles/view/994
- すろぱちくえすと: https://www.slopachi-quest.com/article/yasuda7/

### 亜人 DEFER根拠
- グリーンべると: https://news.p-world.co.jp/articles/9518/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/7S0590/
- K-Navi: https://p-kn.com/slot/2870/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/44167/
- すろぱちくえすと9/4表記: https://www.slopachi-quest.com/article/ajin/
