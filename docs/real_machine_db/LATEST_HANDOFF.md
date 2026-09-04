# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **583**
- latestMachineAdded: **スカイラブ3**（SNKプレイモア / 2011-06-27導入）
- latestRecord: `docs/real_machine_db/machines/2011-06-27_skylove3.md`
- chronologicalFrontier: **2011-06-27**
- frontierLatestExactDateMachine: **スカイラブ3**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、582件目「ハネスロ林家一家」を再取得して開始。
- `INDEX.md` は旧情報（19件/2006年時点）のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-26同日群を閉じ、直前HANDOFF最優先候補 **スカイラブ3** をrepo検索して未登録と確認し、583件目として追加。
- K-Naviとパチビーがともに **2011-06-27** 導入を明示。

## 今回追加 — 583 スカイラブ3

- メーカー: **SNKプレイモア**
- 5号機 / **A+ART・ストック型ART + CZ**
- 機械割: **96.7 / 98.4 / 100.1 / 105.5 / 110.9 / 116.3%**。
- BIG: **1/348.6 / 1/337.8 / 1/327.6 / 1/318.1 / 1/309.1 / 1/297.8**。
- REG: **1/862.3 / 1/799.2 / 1/744.7 / 1/697.1 / 1/655.3 / 1/606.8**。
- ボーナス合算: **1/248.2 / 1/237.4 / 1/227.5 / 1/218.4 / 1/210.0 / 1/199.8**。
- ART「SKY RUSH」: **40G・約+1.4枚/G**。
- ボーナス獲得目安: **BIG約200枚 / REG約48枚**。
- 50枚ベース: 表記揺れ・SNK・1000円/50枚/ベース/コイン持ち等で再探索したが **UNVERIFIED_AFTER_RESEARCH**。逆算しない。
- ART初当りは資料間CONFLICT:
  - K-Navi: **1/148.9 → 1/90.5**
  - pacnk旧DB系: **1/372 → 1/231**（設定別非単調）
  - 定義差/資料差を今回安全に解消できず平均しない。

### 天井 / resetBehavior v0.7 — 583

- 通常天井: **800G / 1000G / 1200G**。
- 振り分け: **25% / 25% / 50%**。
- 管理基準: **ARTとボーナス間の合算ゲーム数**。
- 天井恩恵: **ARTストック3個以上**。
- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。設定変更で天井ゲーム数リセットを確認。K-Naviには本機専用「設定変更後の挙動」「状態移行率(設定変更後)」「高確保障ゲーム数(設定変更時)」解析項目が存在するが、具体数値本文は現存取得経路で回収できず。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。
- `carryOverBehavior`: 据え置き時の天井進捗・内部状態保持は **UNVERIFIED_AFTER_RESEARCH**。設定変更CLEARの反対挙動を自動推定しない。
- `powerCycleBehavior`: 単純電源OFF→ONは **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: 天井カウンタCLEARは確定。リセット専用短縮天井は **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset` / `stateAfterReset`: **PARTIAL_AFTER_RESEARCH**。設定変更専用の状態移行・高確保障解析の存在まで確認、具体値は未回収。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: 設定変更専用状態移行/高確保障の存在は確認したが、発生率・保障G数は **UNVERIFIED_AFTER_RESEARCH**。
- `resetPenalties`: **前日の天井進捗消失はCONFIRMED**。その他のストック/潜伏消失は断定しない。
- `resetDetection`: ガックン/初期出目/液晶等は **UNVERIFIED_AFTER_RESEARCH**。

## 主要出典 — 583（取得日 2026-09-04）

- K-Navi「スカイラブ3」
  - `https://p-kn.com/slot/1440/`
  - 2011-06-27導入、BIG/REG/合算、ART初当り、40G・約+1.4枚/G、設定変更専用解析項目
- パチビー「スカイラブ3」
  - `https://www.pachibee.jp/movies/index/4458`
  - 2011-06-27導入、5号機ART/CZ/天井あり、約+1.4枚/G
- pacnk「スカイラブ3 設定判別ツール」
  - `https://pacnk.com/slot/tools/sh_skylove3.html`
  - PAYOUT、ボーナス合算、800/1000/1200G天井、25/25/50%、設定変更時天井リセット
- pacnk「スカイラブ3」
  - `https://pacnk.com/slot/2011/skylove3/top.php`
  - BIG/REG/ART初当り/PAYOUT、内部状態、設定変更時天井リセット

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 583 / chronologicalFrontier 2011-06-27**。最新main README / mission / INDEX / LATEST_HANDOFF / 582・583レコードを再取得。
2. **2011-06-27同日群を最終監査**。スカイラブ3と既登録プロゴルファー猿は重複しない。
3. 最優先候補は **大逆転（ラスター）**。後年DBで **2011-06-27導入**、ART機、50枚32G、純増1.8枚/G等が確認でき、repo検索では未登録。公式/当時業界/解析資料を追加照合してから584件目候補とする。
4. **パチスロ 笑ゥせぇるすまん（三洋物産）**は2011年6月導入までは確認済み。具体日を再探索し、大逆転より前/同日なら時系列へ挿入する。
5. 6/27同日群が閉じたら6/28以降へ進む。PARTIAL/UNVERIFIEDは検索語・資料系統を変えた後だけ残し、CONFLICTは平均しない。
