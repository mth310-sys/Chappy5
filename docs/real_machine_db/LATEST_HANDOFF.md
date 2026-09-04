# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **584**
- latestMachineAdded: **大逆転**（ラスター / 2011-06-27導入）
- latestRecord: `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
- chronologicalFrontier: **2011-06-27**
- frontierLatestExactDateMachine: **大逆転**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、583件目「スカイラブ3」を再取得して開始。
- `INDEX.md` は旧情報（19件/2006年時点）のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-27同日群を継続監査し、直前HANDOFF最優先候補 **大逆転** を未登録確認後、584件目として追加。
- K-Navi当時展示会資料が **2011-06-27からホール導入予定**を明記。後年DBの2011-06-27とも一致。
- 直前HANDOFFで要確認だった **パチスロ 笑ゥせぇるすまん** は、pacnk等で2011年6月導入までは再確認したが、今回も6月27日以前/同日と確定できる具体日を回収できず。日付を推測して大逆転より先へ挿入しない。

## 今回追加 — 584 大逆転

- メーカー表記: **ラスター**。当時プレス発表は **ウィンネットテクノロジー**。
- 5号機 / **ボーナス非搭載・押し順ART特化 + CZ**。
- 設定構成: **1 / 3 / 4 / 6 の4段階**。
- 機械割: **92.0 / 96.0 / 100.0 / 106.6%**。
- ART555G確率: **1/937 / 1/807 / 1/699 / 1/553**。
- ART1300G確率: **1/2175 / 1/1876 / 1/1625 / 1/1289**。
- ART基本性能: 順押し **555G・約1000枚** / 逆押し **1300G・約2500枚**。上乗せなし。
- 50枚ベース: 後年DB直接値 **約32G/50枚**。別系統照合は今回未回収のため `ANALYSIS_SINGLE`。
- 純増は資料差: P-WORLD/パチマガスロマガ **約+1.9枚/G**、みんスロ **約+1.8枚/G**、当時実践資料 **1.8〜1.9枚/G**。平均せず `CONFLICT_MINOR_NET_INCREASE_RANGE`。
- 天井: **非搭載確認**。
- 後年みんスロは同じ4スペックを設定1/2/3/4と連番表示するため設定番号に資料差があるが、P-WORLD・パチマガスロマガ・当時資料が1/3/4/6で一致。DB主値は1/3/4/6。

### resetBehavior v0.7 — 584

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。CZ/超CZ/RT状態の設定変更時処理を本機固有資料で確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のCZ/RT状態保持を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のCZ/RT状態処理を直接確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。ゲーム数天井非搭載。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。通常天井もリセット短縮天井も非該当。
- `modeAfterReset`: **NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED; CZ/RT_STATE_UNVERIFIED**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用数値・短縮等は確認できず。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失は天井非搭載のため非該当。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ等の本機固有判別要素を確認できず。

## 主要出典 — 584（取得日 2026-09-04）

- K-Navi「パチスロ新機種『大逆転』プレス発表会」
  - `https://p-kn.com/topics/exhibition/792/image/`
  - 2011-06-27からホール導入予定、CZ構造、555G/1300G ART。
- K-Navi「大逆転 チャンスゾーン(CZ)」
  - `https://p-kn.com/slot/1424/31652/`
  - CZ/超CZ、順押し約20% / 逆押し約8%のART期待度。
- P-WORLD「大逆転」
  - `https://www.p-world.co.jp/machine/database/6372`
  - 5号機ART・ボーナス非搭載、約+1.9枚/G、555G/1300G、設定1/3/4/6の確率・機械割。
- パチマガスロマガ「大逆転 ボーナス抽選確率」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/12/h.php`
  - 設定1/3/4/6のART確率、PAYOUT。
- パチマガスロマガ「大逆転 基本システム」
  - `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/12/a.php`
  - 約+1.9枚/G、約1000/2500枚、CZ構造、上乗せなし。
- 娯楽産業 2011-05-10 / グリーンべると 2011-05-11
  - ウィンネット発表、555G/1300G、約1000/2500枚、ボーナス非搭載ART特化。
- みんスロ「大逆転」
  - `https://minslo.com/%E5%A4%A7%E9%80%86%E8%BB%A2/`
  - 2011-06-27、50枚32G、純増1.8枚/G、天井非搭載。設定番号連番表記は主値に採用せず。

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 584 / chronologicalFrontier 2011-06-27**。最新main README / mission / INDEX / LATEST_HANDOFF / 583・584レコードを再取得。
2. **2011-06-27同日群を引き続き最終監査**。スカイラブ3・大逆転は登録済みとして重複しない。
3. **パチスロ 笑ゥせぇるすまん（三洋物産）**の具体日探索を継続。2011年6月導入までは確認済み。6/27以前または同日が直接確認できた場合は時系列BACKFILL/同日追加する。
4. 6月後半候補はメーカー名・型式名・地域納品日も含め再監査する。既知の6月機（リオスパ、蝶々乱舞、鬼浜外伝、エイリヤンビギンズ等）は古い具体日資料が存在するため、repo既登録かを必ず突合し、未登録なら漏れとしてBACKFILLする。今回のWeb再確認ではリオスパ=6/20、蝶々乱舞=6/10または納品6/19資料、鬼浜外伝=6/17、エイリヤンビギンズ=6/6の資料が見つかっており、**既登録前提で飛ばさないこと**。
5. 同日群と6月漏れを閉じてから **6/28以降**へ前進。PARTIAL/UNVERIFIEDは検索語・資料系統を変えた後だけ残し、CONFLICTは平均しない。
