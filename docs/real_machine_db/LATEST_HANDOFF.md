# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **653**
- latestMachineAdded: **パチスロ コードギアス 反逆のルルーシュ**（Sammy）
- latestRecord: `docs/real_machine_db/machines/2012-05-07_code-geass-hangyaku-no-lelouch.md`
- chronologicalFrontier: **2012-05-07**
- frontierLatestExactDateMachine: **パチスロ コードギアス 反逆のルルーシュ**
- schema: **resetBehavior v0.7**
- status: **2012-05-07_GROUP_OPEN__CONTINUE_WITH_TEKKEN_DEVIL_VER**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ねぇ～ねぇ～島娘」を確認して開始。
- INDEXは旧地点19件のままなのでREADME規定どおりLATEST_HANDOFFと実レコード/コミット履歴を優先。
- handoffはrecordCount 652 / frontier 2012-04-16で「クイーンズブレイド 流浪の戦士」を次候補としていたが、実際のmainには同レコードが既に存在し、machine commit `33cb5af7e27444ffd421fa046c31dc9711ec8ff7` も確認できたため重複追加しなかった。
- 2012-04-16群は既存の「一騎当千3 Valiant Venus」「パチスロ クイーンズブレイド 流浪の戦士」「パチスロ マクロスフロンティア はじまりの歌、銀河に響け！」「ねぇ～ねぇ～島娘」を確認。`ToHeart2 バカンスバージョン` は既判定どおり既存ToHeart2の新パネルで独立性能機種にしない。
- 4/16後から次の具体日付き候補を再探索。4/23として拾われる後発機の検定通過日とホール導入日を混同しないよう確認し、スカイラブ4=5/21、鉄のラインバレル=6/18、こすみっくヒーローズ=6/11、餓狼伝説☆双撃=7/2、めぞん一刻～夏色の風と～=7/2、バジリスクII=6/11であることを確認。次の強いホール導入日アンカーは2012-05-07。
- 2012-05-07同日群で「パチスロ コードギアス 反逆のルルーシュ」と「パチスロ鉄拳デビルVer.」を確認。repo検索および直接パス確認で初代コードギアス未登録を確認し653件目として追加。

## 今回の本線追加 — パチスロ コードギアス 反逆のルルーシュ

### 導入・分類

- manufacturer: **Sammy（サミー）**。
- releaseDate: **2012-05-07**。K-Navi本機ページと2012-04-26付K-Navi当時記事で照合。
- generation: **5号機**。
- systemType: **A+ART / ボーナス+セットストック・継続率ART**。
- formalModelName / approvalNumber は機種名・Sammy・初代・型式/検定番号で再探索したが今回直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。R2/R2 C.C.ver./3/スマスロの型式は流用しない。

### 性能コア

- 機械割: **97.0 / 98.5 / 101.4 / 106.1 / 110.0 / 116.4%**。
- BIG合成: **1/394.1 / 390.1 / 385.5 / 370.3 / 360.1 / 344.9**。
- REG合成: **1/819.2 / 789.6 / 771.0 / 697.2 / 675.6 / 655.4**。
- ボーナス合算: **1/266.4 / 261.1 / 257.0 / 241.8 / 234.9 / 226.0**。
- ART出現率: **1/126.4 / 118.7 / 109.2 / 95.5 / 90.7 / 82.4**。これは資料表記上の「出現率」で、純粋なART初当たり専用値とは断定しない。
- 50枚ベース: **30.6 / 30.6 / 30.6 / 30.5 / 30.5 / 30.5G**。
- ART「BLACK REBELLION」: **1セット40G・約+1.5枚/G**。
- BIG約**214枚**、REG約**40枚**、ギアスラッシュ約**36〜40枚**資料帯。
- 第1天井: ボーナス/ART間約960G。第2天井: ボーナス後1500G。第2天井は90%ループシステム当選。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_CEILING_COUNTER_RESET_AND_STATE_RELOTTERY**。設定変更時は天井ゲーム数リセット+内部状態振り分け抽選。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH**。変更専用短縮天井は確認できず。
- `stateAfterReset`: **CONFIRMED_WITH_PUBLIC_NUMBERS**。設定変更時の高確スタート率は設定1 **30%**〜設定6 **45%**、超高確スタート率は全設定 **1%**。設定2〜5の個別高確値は再探索後も確定できず。
- `resetBenefits`: 高確/超高確スタート抽選。
- `resetPenalties`: 設定変更で第1/第2天井進捗が消える。
- `resetDetection`: 朝一、レア小役なしで**倉庫ステージ移行は設定変更濃厚**とする当時解析を確認。確定判別とは扱わない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。設定変更時宵越し不可は確定するが、純据え置き時の全カウンタ/状態保持を直接表で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの本機固有挙動を直接確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### CONFLICT / 品質メモ

- BIG設定1のみCrankySeven **1/394.1** vs K-Navi **1/394.8**。設定2〜6は一致。平均せずCONFLICTとして保持し、REG/合算との整合が取れるCrankySeven系列を主表に採用。
- ギアスラッシュ純増はパチマガスロマガ約36枚 vs CrankySeven約40枚。近似/定義差候補として双方保持。
- ART出現率は初当たり確率と同義とみなさず、資料ラベルのまま保存。
- 2016年R2、2018年R2 C.C.ver.、2021年3、2024年スマスロのresetBehaviorは初代へ流用していない。

## 次回再開地点

1. **recordCount 653 / chronologicalFrontier 2012-05-07**から開始。
2. **2012-05-07同日群を継続**。
3. 最優先候補: **パチスロ鉄拳デビルVer.（山佐）**。K-Naviで2012-05-07ホール導入、当時記事でも5/7全国稼働を確認。repo検索では同名ヒットなしだが検索索引遅延があるため、次回は直接パス/コミット履歴も確認して重複防止。
4. 鉄拳デビル処理後に5/7群を再監査し、同日漏れがなければ5/8以降の最古未処理機へ前進。
5. 欠損は表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックン/50枚を組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 初代コードギアス: `https://p-kn.com/slot/1613/`
- K-Navi 2012-04-26当時記事: `https://p-kn.com/community/blog/BYR3LS0G3BA3C2PPRYBH/224709/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/133/a.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6680`
- CrankySeven: `https://crankyseven.com/codegeass-pc.htm`
- 天井ハイエナ生活（2012年当時）: `https://macerate.seesaa.net/article/277896789.html`
- サミーネットワークス2012-09-03 NEWS RELEASE: `https://www.sammy-net.jp/news/psko-dogiasu.pdf`
- K-Navi 鉄拳デビルVer.: `https://p-kn.com/slot/1617/`
- livedoorニュース 鉄拳デビル2012-05-10: `https://news.livedoor.com/article/detail/6546923/`

## GitHub commits

- パチスロ コードギアス 反逆のルルーシュ machine record: `c79b8a786df576e352625bf9220ba9c9ab3465cd`
