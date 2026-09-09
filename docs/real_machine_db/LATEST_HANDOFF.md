更新日: 2026-09-09

## 現在地点
- recordCount: **1130**
- latestRecordAdded: **パチスロ笑ゥせぇるすまん3～笑撃のドーン～**（三洋物産）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_warau-salesman3-shougeki-no-don.md`
- chronologicalFrontier: **2017-09-04**
- frontierLatestMachine: **パチスロ笑ゥせぇるすまん3～笑撃のドーン～ — No.1130**
- schema: **resetBehavior v0.7**
- status: **2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1129「回胴性ミリオンアーサー」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時mainは **1129件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN**。
- GitHubコード検索で「パチスロ笑ゥせぇるすまん3～笑撃のドーン～」既存レコードなしを確認しNo.1130として登録。
- PiDEA Xの2017-07-12三洋内覧会記事で導入（開店）予定 **2017-09-04**、純増約2.0枚/G、ART40G or 100Gを確認。K-Navi、一撃、ちょんぼりすた、すろぱちくえすと、必勝本でも9/4一致。
- 型式名は **パチスロ笑ゥせぇるすまん3KJ**。検定番号は表記揺れ、型式、三洋/SANYO、検定/認定、7S系、古いDB/流通資料を再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コアは機械割 **97.55 / 98.44 / 101.17 / 105.86 / 111.74 / 119.21%**、ART初当たり **1/335.34 / 322.54 / 290.48 / 244.36 / 194.43 / 148.32**、CZ「福ZONE」 **1/239.61 / 249.86 / 233.08 / 235.19 / 237.73 / 222.88**、ベース **約47.6G/50枚**、ART純増 **約2.0枚/G**。
- ART「ドンドンBONUS」は **1セット40G or 100G**。初当たり時40G **98.44%** / 100G **1.56%**。
- 通常モードはA/B/C/天国で最大天井 **999 / 799 / 499 / 99G**。
- 設定変更時は **天井RESET / モード再抽選 / 状態=通常1 / 笑ゥポイント再抽選 / 駅前ステージ**。純電源OFF→ONは **天井・モード・状態CARRYOVER**、長時間電断後は駅前ステージ。
- 設定変更時の天国移行率は設定1-4 **40.63%** / 設定5 **54.69%** / 設定6 **53.13%**。固定短縮天井ではなくモード再抽選による実質的朝一短縮恩恵として保存。
- リセット時笑ゥポイントは **5pt 59.38% / 25pt 25.00% / 50pt 5.47% / 100pt 10.16%**。100ptで次回ARTが真or極ドンドンBONUSへ昇格するため朝一恩恵として保持。
- 据え置きは攻略資料が「電源OFF→ON（据え置き）」と同一列で扱うため、天井/モード/状態/ポイントCARRYOVERは支持されるが、電源操作なし据え置きとの操作分離はできず **CARRYOVER_SUPPORTED_BY_STAY_SETTING_LABEL_BUT_OPERATION_CONFLATED**。
- ガックンは当時攻略資料で有効/可能とされるが定量的確定性を固定できないため **POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC**。293G高確ゾーンの内部G数依存も推測材料として分離保存。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 一部掲示板転載に設定3機械割102.17%表記があるが、一撃・P-WORLD・必勝本・複数解析は101.17%で一致するため転載誤記候補としてcanonicalから除外し資料差を記録。

## No.1130 — パチスロ笑ゥせぇるすまん3～笑撃のドーン～
- manufacturer: **三洋物産（SANYO）**
- releaseDate: **2017-09-04**
- formalModelName: **パチスロ笑ゥせぇるすまん3KJ**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / ART / 規定G数モード+自力CZ・セットストック型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **天井RESET / モード再抽選 / 通常1 / 笑ゥポイント再抽選 / 駅前ステージ**。
- pure power OFF→ON: **天井・モード・状態CARRYOVER**。
- stay setting: **CARRYOVER支持あり。ただし資料上「電源OFF→ON（据え置き）」と操作が混在するため独立契約は限定扱い**。
- normal ceilings: **通常A 999G / 通常B 799G / 通常C 499G / 天国99G**。
- reset tengoku rate: **設定1-4 40.63% / 設定5 54.69% / 設定6 53.13%**。
- reset Warau point: **5pt 59.38% / 25pt 25.00% / 50pt 5.47% / 100pt 10.16%**。
- reset detection: **ガックン可能資料あり。ただし確定性/発生率は未固定**。

## 2017-09-04群 — OPEN
登録済み:
1. **パチスロ北斗の拳 新伝説創造 — No.1127**
2. **ぱちスロAKB48 勝利の女神 — No.1128**
3. **回胴性ミリオンアーサー — No.1129**
4. **パチスロ笑ゥせぇるすまん3～笑撃のドーン～ — No.1130**

次候補:
1. **亜人**
2. **デビルマンχ**
3. **アメイジング・スパイダーマン**
4. **セイクリッドセブン**
5. **YASUDA7**
6. 資料によっては **蒼き鋼のアルペジオ -アルス・ノヴァ-** 等も9/4表記があるため、地域導入/掲載定義差を横断監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1130を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1130を再取得。
2. **1130件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN** を正本として継続。
3. 最優先は **「亜人」No.1131候補**。重複確認後、performance core + resetBehavior v0.7を収集。
4. その後 **デビルマンχ → アメイジング・スパイダーマン → セイクリッドセブン → YASUDA7** を優先監査。
5. 9/4群は全メーカー・表記揺れ・地域導入差まで横断し、候補を順次登録してからCLOSED判定。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1130 笑ゥせぇるすまん3
- PiDEA X 内覧会/導入日/ART構造: https://www.pidea.jp/articles/%E7%AC%91%E6%92%83%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%8C%E3%83%89%E3%83%BC%E3%83%B3%EF%BC%81%E3%80%8C%E7%AC%91%E3%82%A5%E3%81%9B%E3%81%87%E3%82%8B%E3%81%99%E3%81%BE%E3%82%933%E3%80%8D%EF%BC%8F%E4%B8%89%E6%B4%8B
- 一撃 機種トップ/スペック: https://1geki.jp/slot/s_warausalesman3/
- 一撃 天井/設定変更/電源OFF ON: https://1geki.jp/slot/s_warausalesman3/3/
- 一撃 モード移行/リセット天国率: https://1geki.jp/slot/s_warausalesman3/42/
- 一撃 朝一立ち回り/笑ゥポイント: https://1geki.jp/slot/s_warausalesman3/5/
- P-WORLD ART/CZ/機械割: https://www.p-world.co.jp/machine/database/8461
- ちょんぼりすた スペック/ベース/CZ/天井: https://chonborista.com/slot/sanyo-slot/43684/
- すろぱちくえすと リセット数値/笑ゥポイント: https://www.slopachi-quest.com/article/warau-salesman3/
- 期待値見える化 朝一比較/笑ゥポイント/ガックン/293G判別: https://slotjin.com/slot/warau3-reset/
- K-Navi 導入日: https://p-kn.com/slot/2855/
- 必勝本 スペック/ART構造: https://p.hisshobon.jp/machine/3032/1/65910
- 中古実機流通 型式名: https://store.shopping.yahoo.co.jp/nakaiticom/20248.html
