# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **681**
- latestMachineAdded: **押忍!!豪炎高校應援團**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-08-06_ossu-gouen-koukou-ouendan.md`
- chronologicalFrontier: **2012-08-06**
- frontierLatestExactDateMachine: **押忍!!豪炎高校應援團**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-08-06__NEXT_BOUNDARY_AUDIT_TO_2012-08-20_DONCHAN_MATSURI**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ海物語ミラクルマリン」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 680 / frontier 2012-08-06 / 08-06群OPEN。
- 08-06残存監査で山佐「押忍!!豪炎高校應援團」を発見。repo検索で未登録を確認し681件目として追加。
- 導入日はパチビーが2012-08-06と明記。山佐公式/P-WORLDは2012年8月で整合。
- 2012年8月の機種一覧・メーカー資料・業界/旧DBを再監査し、08-06群は既登録「夜王」「兎-野性の闘牌-」「パチスロ海物語ミラクルマリン」と今回の「押忍!!豪炎高校應援團」を確認。追加の具体日付き未登録機を確認できなかったため08-06群をCLOSED。
- 次の具体導入日候補は「ドンちゃん祭」。メーカー発表転載で2012-08-20より全国ホール導入開始を確認し、repo検索では未登録。

## 今回の本線追加 — 押忍!!豪炎高校應援團

### 識別

- manufacturer: **山佐**
- releaseDate key: **2012-08-06**
- generation: **5号機**
- systemType: **擬似ボーナス+ゲーム数管理型ART**
- modelName: **ゴウエンコウコウオウエンダンZ**
- approvalNumber: **2S0398**

### 性能コア

- 機械割: **96.8 / 98.1 / 100.6 / 104.5 / 108.6 / 114.3%**
- 擬似BIG: **1/443 / 1/410 / 1/390 / 1/368 / 1/347 / 1/293**
- 擬似REG: **1/520 / 1/485 / 1/471 / 1/458 / 1/437 / 1/374**
- 擬似ボーナス合算: **1/239 / 1/222 / 1/213 / 1/204 / 1/193 / 1/164**
- メインART初当り: **1/780 / 1/731 / 1/705 / 1/676 / 1/640 / 1/554**
- ボーナス+ART合算: **1/182.9 / 1/170.5 / 1/164.1 / 1/156.8 / 1/148.2 / 1/126.6**
- 50枚ベース: **約31G/1000円（2012年当時の実戦値、ANALYSIS_SINGLE_PERIOD_PRACTICAL）**
- ART「團旗道」: **1セット40G+α、純増約+2.5枚/G、継続率50〜80%**
- 熱血ボーナス: **平均約150枚**
- 百折不撓ボーナス: **平均約42枚、ART期待度約33%**
- モード別最大G: **通常A 1280G+前兆 / 通常B 768G+前兆 / 天国128G+前兆**

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED**。設定変更で天井ゲーム数リセット、心&体メーター引継ぎ、校内or商店街ステージをランダム選択、モード再抽選。
- `carryOverBehavior`: **CONFIRMED_PARTIAL**。設定変更を伴わない朝一では天井ゲーム数・心&体メーターを保持することを電源OFF/ON契約から確認。
- `powerCycleBehavior`: **CONFIRMED**。電源OFF→ONのみなら天井ゲーム数・心&体メーター引継ぎ、開始ステージのみ校内or商店街からランダム。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE__RETAIN_ON_POWER_CYCLE**
- `ceilingAfterReset`: **MODE_DEPENDENT_AFTER_RESET**。変更後のモードで最大1280/768/128G+前兆。
- `modeAfterReset`: **奇数設定 A45% / B25% / 天国30%、偶数設定 A25% / B45% / 天国30%**（2012年当時解析）。
- `stateAfterReset`: **CONFIRMED_PARTIAL**。心&体メーターは設定変更でも引継ぎ。JAC成立Gで設定変更すると内部通常へ移行する本機固有挙動あり。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **設定変更時天国30% + 心&体メーター蓄積引継ぎ**
- `resetPenalties`: **設定変更で前日天井進捗消失**
- `resetDetection`: **JAC据え置き判別法CONFIRMED / ガックンUNVERIFIED_AFTER_RESEARCH**。閉店時JAC成立状態を残し翌日1G目のJAC中ベルで据え置き推測が可能とする本機専用資料あり。
- `publicMorningNumbers`: **変更時モード振分を保存**。後年整理には設定1朝一天国28% / 設定6 30%との別記述があり、当時解析の全設定30%と平均せずCONFLICT_NOTE。

### 品質メモ

- 純増/セットG/擬似ボーナス平均枚数は山佐公式とP-WORLDで照合。
- 機械割・ART初当り・合算系列はP-WORLDと当時攻略資料で照合。
- 一部二次資料が「ボーナス+ART」系列をART初当りと表記するため定義競合を記録し、メインART初当り1/780〜1/554と混ぜていない。
- 50枚ベースは解析公表表を発見できず、2012年当時の実戦値約31G/1000円のみ低信頼度で保存。2021年「豪炎高校應援團 檄」の約51G/50枚等は別機種として排除。
- 設定変更/電源OFF→ON契約はパチ＆スロ必勝本の本機専用記事で明確に分離されている。

## 次回再開地点

1. **recordCount 681 / chronologicalFrontier 2012-08-06 / 08-06 group CLOSED**から開始。
2. **2012-08-07〜2012-08-19の境界監査**をメーカー製品一覧、当時業界記事、旧DB、アーカイブで実施し、具体日付き未登録機がないことを確認する。
3. 現時点の次候補はエレコ/ユニバーサル系 **「ドンちゃん祭」2012-08-20**。メーカー発表転載で2012-08-20全国ホール導入開始を確認、repo検索では未登録。境界により古い機種がなければ682件目として性能コア+resetBehavior v0.7を収集する。
4. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_oed/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6778`
- パチビー: `https://www.pachibee.jp/machines/reach/212070003`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2057/1/35878`
- パチ速 2012年当時解析: `https://patisoku.blog14.fc2.com/blog-entry-761.html`
- 天井ハイエナ生活 2012年当時資料: `https://macerate.seesaa.net/article/288333617.html`
- 2-9伝説 朝一の立ち回りとダブルメーター: `https://2-9densetsu.com/blog-entry-1049-html/`
- 4Gamer ドンちゃん祭メーカー発表転載: `https://www.4gamer.net/games/180/G018057/20120820046/`

## GitHub commits

- 押忍!!豪炎高校應援團 machine record: `02a6870529159a39e22e571129512d4ffd5ab724`
