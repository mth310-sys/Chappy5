# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **581**
- latestMachineAdded: **プロゴルファー猿**（スパイキー / primary 2011-06-20、K-Navi 2011-06-27との具体日競合あり）
- latestRecord: `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
- chronologicalFrontier: **2011-06-20**
- frontierLatestExactDateMachine: **プロゴルファー猿**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、580件目「リオスパ Rioの大温泉」を再取得して開始。
- `INDEX.md` は旧情報（19件/2006年時点）を含むため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-20同日群の最優先候補 **プロゴルファー猿** を監査し、machine一覧に既存レコードがないことを確認して581件目として追加。
- 導入日はパチ＆スロ必勝本 **2011-06-20導入** / K-Navi **2011-06-27ホール導入開始** / P-WORLD **2011年06月導入開始**。06-20と06-27を納品/全国導入等の定義差と断定できる一次資料は今回回収できなかったため **CONFLICT_EXACT_DATE** とし、漏れ防止の主releaseDateは最古具体日の2011-06-20を採用。

## 今回追加 — 581 プロゴルファー猿

- メーカー: **スパイキー**
- 型式名: **プロゴルファー猿B**
- 検定番号: **1S0198**
- 5号機 / **ART特化・ゲーム数上乗せART + CZ + 規定ゲーム数ART発動**
- 機械割: **96.9 / 98.2 / 99.5 / 104.2 / 107.3 / 113.3%**。P-WORLDはレンジ下限を96.96%とするため設定1は小数精度差を注記。
- ART初当たり: **1/196 / 1/191 / 1/186 / 1/159 / 1/146 / 1/128**。
- 1000円あたりゲーム数: **34.28 / 34.29 / 34.31 / 34.32 / 34.54 / 35.46G**。
- ART「雷電BONUS」純増: **約+2.0枚/G**。
- VICTORY BONUS: **48枚**。全設定共通合算 **1/32768**。
- ART突入時初期ゲーム数は最大360G/平均約60G、ビクトリーロードは最大3G・最大600G上乗せ。
- 規定G数テーブル上限: **ドリーム108 / 天国216 / 準備540 / 通常A1080 / 通常B1188G**。

### resetBehavior v0.7 — 581

- `settingChangeBehavior`: **天井/規定G数カウンタRESET + モード再セット**を二次資料で確認。K-Naviにも本機専用の設定変更後挙動・設定変更時モード移行率項目が存在する。
- `carryOverBehavior`: 純粋な据え置き時のゲーム数・モード保持を直接明記した本機固有本文は回収できず **UNVERIFIED_AFTER_RESEARCH**。一般則で補完しない。
- `powerCycleBehavior`: 単純電源OFF→ON時は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: 固定のリセット専用短縮天井は確認なし。ただし設定変更後の再セット先により108/216/540/1080/1188Gの規定G数テーブルがあり得る。
- `modeAfterReset`: **RESELECT_ON_SETTING_CHANGE**。具体的な設定変更時モード振り分け数値は専用解析項目の存在まで確認したが本文数値を回収できず **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: 108/216/540G等の短いテーブルへ再セットされる可能性あり。ただし発生率不明のため数値恩恵は付与しない。
- `resetPenalties`: 設定変更で前日までの規定G数進捗を失う。
- `resetDetection`: ガックン/初期出目/液晶カウンター/ステージ等の本機固有変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値: 規定G数テーブル値以外の設定変更時振り分け/朝一当選率は **UNVERIFIED_AFTER_RESEARCH**。

## 主要出典 — 581（取得日 2026-09-04）

- K-Navi「プロゴルファー猿」
  - `https://p-kn.com/slot/1421/`
  - 2011-06-27ホール導入開始、ART初当たり、純増約2枚/G、ART/CZ概要、設定変更後・設定変更時モード移行率の解析項目
- P-WORLD「プロゴルファー猿」
  - `https://www.p-world.co.jp/machine/database/6361`
  - スパイキー、5号機ART/CZ/天井、純増約2.0枚/G、VICTORY BONUS 48枚、規定G数108/216/540/1080/1188G、型式名「プロゴルファー猿B」、検定番号1S0198、2011年06月、機械割レンジ96.96〜113.3%
- パチ＆スロ必勝本「基本スペック [プロゴルファー猿]」
  - `https://p.hisshobon.jp/machine/1835/1/29617`
  - 2011-06-20導入、ART初当たり、VICTORY BONUS 1/32768、純増2.0枚/G、初期ART最大360G/平均60G、ビクトリーロード最大600G
- パチマガスロマガ旧解析「小役確率」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/03/c.php`
  - 1000円あたり34.28/34.29/34.31/34.32/34.54/35.46G
- 2-9伝説「プロゴルファー猿」
  - `https://29den.com/progolfer-saru/`
  - 機械割、ART初当たり、規定G数、設定変更で天井G数リセット
- 天井ハイエナ生活「天井ハイエナ期待値リスト は行」
  - `https://macerate.seesaa.net/article/226312110.html`
  - 宵越し×、設定変更時モード再セット

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に直接確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 581 / chronologicalFrontier 2011-06-20**。最新main README / mission / INDEX / LATEST_HANDOFF / 580・581レコードを再取得。
2. **2011-06-20同日群をもう一度最終監査して閉じる**。プロゴルファー猿は登録済みなので重複しない。
3. 同日群に未登録がなければ **2011-06-21〜06-25** の最古未登録機を導入日順に監査する。
4. 後続アンカーは **ハネスロ林家一家（2011-06-26納品開始予定候補）**、**スカイラブ3（2011-06-27ホール導入候補）**。途中機種を飛ばさない。
5. プロゴルファー猿の06-20/06-27は **CONFLICT_EXACT_DATE** のまま保持し、後続で一次/当時業界資料から日付定義が確定した場合のみ修正する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、公式/業界/当時解析/旧DB/アーカイブ/回顧資料を横断した後だけ残す。CONFLICTは平均しない。
