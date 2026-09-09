更新日: 2026-09-09

## 現在地点
- recordCount: **1135**
- latestRecordAdded: **パチスロ ゴルゴ13**（SANKYO / 2017年版）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_golgo13-sankyo.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ ゴルゴ13 — No.1135**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1134「YASUDA7」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1134件 / chronologicalFrontier 2017-09-04 / 9/4群CLOSED**。
- 前handoff最優先候補 **SANKYO「パチスロ ゴルゴ13」2017年版** を、2006年オリンピア版との混同を避けて調査し **No.1135** としてmainへ保存。
- SANKYO公式オンライン博物館は導入年月2017.09、型式「パチスロ ゴルゴ13 S」。HAZUSEは型式 **パチスロゴルゴ13S**、検定番号 **7S0229**、導入日 **2017-09-19**。パチビー/K-Navi/複数解析でも9/19一致。
- 性能コア: 機械割 **96.9 / 98.4 / 99.9 / 103.6 / 105.7 / 110.2%**。ART初当たり **1/673 → 1/518**、CZ後半 **1/367 → 1/318**、GAME13合算 **1/131 → 1/125**、ベース **約44G/50枚**、ART純増 **約2.0枚/G**、1セット **100G+α**。
- 通常天井はART間最大 **1565G**。1565G到達でART確定ではなくCZ後半パートへ移行し、ART非当選時も以後ART当選までCZ高確率状態が継続するため、一部資料の「実質青天井」表現は説明差として保持。
- resetBehavior v0.7: 設定変更で **天井RESET / SCテーブルRESET / CB状態RESET**。純電源OFF→ONでは **天井CARRYOVER / SCテーブルCARRYOVER / CB状態CARRYOVER**。据え置きもホール運用上carryover扱い。
- 朝一ステージ候補は **ニューヨーク / ロンドン / 東京 / 香港**。確定変更判別には使わない。
- 設定変更時はART初当たり時の **超A級スナイパーRUSHスタート割合優遇**が当時解析で示唆されるが、具体的発生率は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時SCテーブル初期振り分け、本機固有の確定ガックン/ランプ判別も再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1135 — パチスロ ゴルゴ13（SANKYO 2017版）
- manufacturer: **SANKYO**
- releaseDate: **2017-09-19**
- formalModelName: **パチスロゴルゴ13S**
- certificationNumber: **7S0229**
- generation/system: **5号機（5.5号機世代） / ART / セットストック型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **天井RESET / SCテーブルRESET / CB状態RESET**。
- stay setting: **天井・SCテーブル・CB状態CARRYOVER**。
- pure power OFF→ON: **天井・SCテーブル・CB状態CARRYOVER**。
- normal ceiling max: **1565G**。
- reset ceiling shortening: **固定のリセット専用短縮天井はNONE_CONFIRMED**。通常天井自体に複数G数振り分けあり。
- reset benefit: **超A級スナイパーRUSHスタート割合優遇の示唆あり / 数値UNVERIFIED**。
- reset detection: 朝一ステージ候補は公開、確定ガックン/ランプ等は **UNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み:
1. パチスロ北斗の拳 新伝説創造 — No.1127
2. ぱちスロAKB48 勝利の女神 — No.1128
3. 回胴性ミリオンアーサー — No.1129
4. パチスロ笑ゥせぇるすまん3～笑撃のドーン～ — No.1130
5. SLOTデビルマンχ — No.1131（導入日9/4 vs 9/19 CONFLICT保持）
6. アメイジング・スパイダーマン — No.1132
7. パチスロ セイクリッドセブン — No.1133
8. YASUDA7 — No.1134

## 2017-09-19群 — OPEN
登録済み:
1. **パチスロ ゴルゴ13（SANKYO 2017版）— No.1135**

優先未処理候補:
- **亜人** — 9/19本線、9/4表記資料はCONFLICT候補。
- **蒼き鋼のアルペジオ -アルス・ノヴァ-** — 9/19。
- **ウルトラセブン**
- **魁!!男塾**
- **盗忍！剛衛門**
- **シンデレラブレイド3**
- 同日・周辺日の全メーカー横断監査を継続し、漏れ確認後に群CLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1135を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1135を再取得。
2. **1135件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「亜人」— No.1136候補**。導入日9/19本線と9/4表記の競合を平均せず保持する。
4. 次に **蒼き鋼のアルペジオ -アルス・ノヴァ-** を優先し、ウルトラセブン / 魁!!男塾 / 盗忍！剛衛門 / シンデレラブレイド3等を全メーカー・表記揺れ・地域導入差で横断監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1135 パチスロ ゴルゴ13（SANKYO 2017版）
- SANKYO公式オンライン博物館: https://www.sankyo-fever.jp/collection/694/
- HAZUSE: https://hazuse.com/machine/pachislot/7S0229/
- パチビー: https://www.pachibee.jp/machines/lecture/217080016
- K-Navi: https://p-kn.com/slot/2845/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/42642/
- すろかい: https://slotkaiseki.hatenablog.com/entry/golgo13
- パチスロデータ: https://pachislo-data.com/sankyo/51558
- すろぱちくえすと: https://www.slopachi-quest.com/article/gorugo13/
