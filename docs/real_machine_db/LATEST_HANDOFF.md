# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **490**
- latestMachineAdded: **SLOTとんでも戦士ムテキング**（ミズホ / 2010-06-07）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_slot-tondemo-senshi-muteking.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **SLOTとんでも戦士ムテキング**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前489「マジックライアン」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **489** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFFの同日群未処理候補「とんでも戦士ムテキング」をrepo未登録確認後、490件目として追加。
- chronologicalFrontierは **2010-06-07** のまま同日群境界を継続する。

## 490 — SLOTとんでも戦士ムテキング 要約

- メーカー: **ミズホ / ユニバーサルエンターテインメント**
- 型式名: **とんでも戦士ムテキングT**
- 検定番号: **9S1050**
- 導入主値: **2010-06-07**（K-Navi・パチビー）
- 導入月競合: ユニバーサル公式=2010年6月発売、P-WORLD/5号機クロニクル=2010年5月
- 世代/タイプ: **5号機 / A+ART / セットストック式ART**
- 機械割: **97.4 / 99.3 / 100.7 / 104.5 / 110.7 / 117.0%**
- ボーナス合算: **全設定1/256**
- ART初当たり: **1/272 / 1/262 / 1/263 / 1/241 / 1/215 / 1/193**
- 50枚ベース: **28.05 / 28.05 / 28.05 / 28.10 / 28.15 / 28.20G/1000円**
- 基本獲得: ムテキン/とんでもBONUS **約204枚**、クロダコBONUS **約48枚**
- ART純増: P-WORLD/パチビー **約+1.5枚/G**、5号機クロニクル **約+1.2枚/G** → `CONFLICT`
- 救済: **ボーナス間1200G消化後のボーナス当選時、ナビポイントストック率が超高確率**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — SLOTとんでも戦士ムテキング

- **設定変更**: 本機専用「攻め時・ヤメ時・設定変更時」解析項目の存在までは確認したが、取得可能本文から1200G進捗、高低状態、ART/ナビポイントストックの変更時処理を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 1200G救済条件は確認済みだが、前日ボーナス間ゲーム数の宵越し可否を直接明記する高信頼資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: ボーナス間ゲーム数、高低状態、ART/ナビポイントストックの扱いは `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 通常の到達即ART型ではなく、ボーナス間1200G後のボーナス当選時にナビポイントストック超高確率。設定変更時の内部カウンタreset/carryは未確定。
- **モード・状態**: 通常低確/高確は確認済み。設定変更時振り分けは未確定。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン/初期出目/液晶/朝一ステージ/リールまで再探索したが本機固有の高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済み。
- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み。
- 次の欠損候補は2006-11群の `小野真弓のかわいい日本昔話` / `海童王`。既存レコードのreleaseDateと実ファイル順を確認し、順序を固定してから補完する。

## 主要出典（取得日 2026-09-03）

### SLOTとんでも戦士ムテキング
- ユニバーサル公式: `https://www.universal-777.com/product/slot/muteking/`
- パチビー: `https://www.pachibee.jp/machines/index/210040011`
- K-Navi: `https://p-kn.com/slot/1206/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5951`
- パチマガスロマガ トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/33/mizuho_slot_33.php`
- パチマガスロマガ 小役/1000円: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/33/c.php`
- 5号機クロニクル: `https://5goki.com/universal`

## 今回のGitHub更新

- 490 SLOTとんでも戦士ムテキング追加: commit `734133e9a02c2a4f9be69ab3b206c44b5ec0bd4d`

## 次回再開地点

1. **recordCount 490 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群の境界監査を継続**。南国育ちスペシャル-30、ガメラ、ニューパルサーV2、マジックライアン、SLOTとんでも戦士ムテキングは登録済みとして重複追加しない。
3. **ゴッドハンターV**を最優先で追加照合。K-Navi系2010-06-07とパチビー2010-06-08の導入日競合候補を、型式名・検定番号・当時業界記事・メーカー/販社資料・P-WORLD・旧解析で詰める。未登録なら時系列規則に従い追加する。
4. ゴッドハンターV処理後、2010-06-08〜次の明確な導入日までを別系統の月間導入一覧で監査して本線を前進する。
5. 遡及QAは **ジャックと豆の木まで補完済み**。次は2006-11群の `小野真弓のかわいい日本昔話` / `海童王` の順序を固定し、最初のresetBehavior欠損を補完する。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
