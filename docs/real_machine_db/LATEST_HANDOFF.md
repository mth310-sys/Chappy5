# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **530**
- latestMachineAdded: **俺の空～蒼き正義魂～**（ロデオ / 主値2010-12-06）
- latestRecord: `docs/real_machine_db/machines/2010-12-06_ore-no-sora-aoki-seigi-damashii.md`
- chronologicalFrontier: **2010-12-06**
- frontierLatestMachine: **俺の空～蒼き正義魂～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前529「アントニオ猪木が元気にするパチスロ機」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **529** / chronologicalFrontier **2010-11-29**。
- 2010-11-29同日群と11/30～12/05境界を導入カレンダー・当時資料・メーカー年次一覧等で再監査。本機より前に割り込む強い未登録ホール導入日を確定できず。
- repo内で「俺の空 蒼き正義魂」を検索し重複なしを確認して530件目として追加。

## 530 — 俺の空～蒼き正義魂～

- メーカー: **ロデオ**
- 世代/タイプ: **5号機 / A+ART / セットストック+ゲーム数上乗せART**
- 型式名: **俺の空 蒼き正義魂**
- 検定番号: **0S0855**
- 導入主値: **2010-12-06**（K-Navi・パチ＆スロ必勝本一致）
- HAZUSE: **2010-12-03** → 導入日CONFLICT保持。
- P-WORLD: 2010年11月の月単位表記 → 粗い補助資料として分離。
- 機械割: **97.1 / 98.8 / 100.5 / 104.0 / 108.5 / 113.5%**
- BIG: **1/397.2 → 1/358.1**
- REG: **1/704.7 → 1/560.1**
- ボーナス合算: **1/254.0 → 1/218.5**
- BIG約**265枚** / REG最大**72枚**
- ART「俺チャンス」: **25G / 50G / 100G、約+1.3枚/G**。初回ARTは50G以上保証。
- 50枚ベース: **約32.0G/1000円**（Cranky Seven単一解析資料。別系統直接照合は未回収のためANALYSIS_SINGLE）。
- ART初当たり設定別全表: **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_VERIFIED**

### 天井 / resetBehavior v0.7

- 第1天井: **ボーナス後501～600Gの間にメット25回以上 → 50%で俺タイム**。
- 第2天井: **ボーナス後801～900Gの間にメット25回以上 → 俺タイム確定**。
- 第3天井: **ボーナス間1200G → ART確定**。
- **設定変更で天井到達までのゲーム数をクリア**。
- 設定変更後の内部状態振り分け:
  - 低確 **66.7%（全設定）**
  - 高確 **32.3%（設定1～3） / 29.3%（設定4～6）**
  - 超高確 **1.0%（設定1～3） / 4.0%（設定4～6）**
  - 高確以上合計は **全設定33.3%**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の天井/状態/ART関連引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更判別（ガックン/初期出目等）: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **VERIFIED_CORE_WITH_POWER_CYCLE_AND_DETECTION_GAPS**。

## CONFLICT / 注意

- 導入日はK-Navi・必勝本 **2010-12-06** vs HAZUSE **2010-12-03**。主値は複数一致の12/06、競合値は消さない。
- P-WORLDの2010年11月表記は日付粒度が異なるため直接平均/統合しない。
- 50枚ベース約32.0Gは単一古参解析資料。別系統直接照合が取れるまではANALYSIS_SINGLEのまま。

## 主要出典 — 530（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6131`
- K-Navi: `https://p-kn.com/slot/1310/`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1695/1/27141`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0855/`
- Cranky Seven: `https://crankyseven.com/orenosora-aokiseigi-pc.htm`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/55/rodeo_slot_55.php`

## 今回のGitHub更新

- 530追加: `docs/real_machine_db/machines/2010-12-06_ore-no-sora-aoki-seigi-damashii.md`
- machine record commit: `31571359b8776faafccbd4b5786c745ed7e1f416`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時にmachine tree / commit履歴 / 実ファイル日付から怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 530 / chronologicalFrontier 2010-12-06**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-12-06同日群を最終監査**。同日未登録がなければ12/07以降の最古未処理へ進む。
3. 現時点の次の強い日付候補としてHAZUSEに **2010-12-10「緑ドン VIVA!情熱南米編」** がある。ただし他カレンダーでは別日扱いの可能性があるため、K-Navi/P-WORLD/当時業界記事/ユニバーサル公式等で導入日定義を照合し、12/07～12/09の漏れを閉じてから採用する。
4. パイオニア公式では **スペシャルハナハナII-30** が2010年12月発売。具体的ホール導入日を確定して時系列へ配置する。
5. 平和公式の「真・三國無双」は2010年12月登場表記だが、別一次資料ではホール導入2011-02-21とされるため、2010年12月キューへ早計に入れない。
6. 50枚ベースやresetBehaviorは、最初の検索で欠損扱いにせず、型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変えて複数系統を横断する。
7. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
