# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **308 `ナゴスロ金鯱だがね`（ニューギン / 2008-10-14、遡及漏れ補完）**。
- 2008年10月6〜13・20〜31境界を再監査。発表日と実導入を分離し、`クラッピーパーク` は2008-11-17導入、`いみそ〜れ2` 系は2008-12導入資料を確認して10月へ戻さない。10月末の新たな確定残存機は今回見つからず、11月3日群へ進行。
- **309 `ハードボイルド～グリフォンの幻影～`（サミー / 型式ハードボイルドF）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。競合値は平均せず `CONFLICT`、本機固有reset情報は検索語・資料系統を変えた再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とした。

## 309. ハードボイルド～グリフォンの幻影～

- record: `docs/real_machine_db/machines/2008-11-03_hardboiled-gryphon-no-genei.md`
- manufacturer: サミー
- modelNumber: `ハードボイルドF`
- approvalNumber: `8S0622`（P-WORLD）
- releaseDate: **2008-11-03**。2008-09-18グリーンべるとが「納品は11月3日よりスタート予定」と明記。後年DMMは11月4日導入、P-WORLDは月表示で10月となるため、日付定義差は資料内に保持し、当時業界の納品開始日を採用。
- generation: 5号機
- systemType: ボーナス + AT高確 `HIGH WAY ZONE` + ART `BULLET RUSH` / 4ライン・パンク回避型ART。
- BIG合成: **1/474.90 / 1/455.11 / 1/436.91 / 1/414.78 / 1/385.51 / 1/350.46**。
- REG: **1/590.41 / 1/569.88 / 1/550.72 / 1/528.52 / 1/492.75 / 1/464.79**。
- 合算: **1/263.20 / 1/253.03 / 1/243.63 / 1/232.40 / 1/216.29 / 1/199.80**。2008-11-09当時解析とP-WORLD内訳で整合。
- 機械割: **CONFLICT**。2008-11-07〜09当時解析系列 **96.4 / 97.8 / 99.3 / 103.5 / 106.4 / 111.0%**、P-WORLD系列 **98.0 / 99.5 / 101.4 / 103.9 / 107.4 / 111.7%**。平均化禁止。
- 50枚/1000円ベース: **37.1〜38.0G/50枚**（CrankySeven単一解析。独立照合待ち）。
- ボーナス実獲得目安: 同色BIG約**328〜330枚**、異色BIG約**250〜258枚**、REG約**55枚**。規定払い出し終了は465枚超/370枚超/70枚超。
- ART `BULLET RUSH`: 当選時 **50 / 150 / 500G**、上乗せあり。
- ART純増: **CONFLICT**。2008-09-18グリーンべると約**+1.0枚/G**、P-WORLD約**+0.8枚/G**。CrankySevenは約+1.0枚/G。
- `HIGH WAY ZONE`: ボーナス後は必ず突入。通常特定役からも移行抽選あり。滞在中ボーナスはART期待度上昇。
- 仮天井: **ボーナス間1200GでHIGH WAY ZONEへ移行**（P-WORLD）。ボーナス直撃天井ではない。パチマガスロマガ旧攻略の「天井AT」分類とも方向整合。
- `coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_AND_ART_NET_CONFLICTS`。

### resetBehavior（309）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の1200Gボーナス間カウンタ初期化/引継ぎ、HZ/ART/ストック残G処理を直接説明する本機固有資料を確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の1200Gカウンタ、HZ/ART状態、ARTストック/残Gの翌日処理は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみの1200Gカウンタ/HZ/ART/初期出目処理は未確定。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH`。通常の仮天井はボーナス間1200G→HZだが変更時カウンタ扱いは未確定。
- `ceilingAfterReset`: 固定リセット短縮天井/朝一固定G数を確認できず。
- `modeAfterReset`: 朝一専用モード/HZ優遇振り分けを確認できず。
- `stateAfterReset`: ART/HZ/ストック残Gの変更/電源断時処理は未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、ランプ、リール挙動等の本機固有変更判別条件を確定できず。
- 公開通常数値: **ボーナス間1200G→HIGH WAY ZONE**。設定変更専用モード振り分け、朝一当選率、追加恩恵率は確認なし。

## 309主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003817/
- https://w.atwiki.jp/5gouki/pages/116.html
- https://happyslot.blog15.fc2.com/blog-entry-249.html
- https://www.p-world.co.jp/machine/database/5317
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/114/a.php
- https://crankyseven.com/hardboiled-pc.htm
- https://www.sammy.co.jp/japanese/products/pachislot/2008/index.html

## 境界監査・重複防止

- **既存309件の再追加禁止。**
- 302 `アカギ～永続の闘牌～` と308 `ナゴスロ金鯱だがね` は2008-10-14。
- 303 `天地を喰らう`、304 `まつり屋華恋` は2008-10-19/20前後資料で処理済み。
- 305 `バウンティキラー`、306 `豊漁` は2008-10-05の遡及漏れ補完。
- 307 `パチスロクローズ武装戦線` は2008-10-27。
- 10月末発表機のうち `クラッピーパーク` は2008-11-17、`いみそ〜れ2`系は2008-12導入資料があるため10月に混入させない。
- `南国育ち` はグリーンべると当時記事で **2008-11-03納品予定**を確認済み。309と同日群の次候補。
- `鬼火`、`サイサイ` は2008-11-24納品開始資料があるため11月前半へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 **`球児（2006-09）`** を維持。
- 新規収集を優先しつつ、既存QAは別リレーで順次補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準309件地点。2008-11-03同日群の次候補 `南国育ち`（オリンピア / 型式南国育ちR2）から継続。**
2. `南国育ち` は2008-10-03グリーンべるとで11月3日納品予定、純増約+1.5枚/G ART「南国チャンス」、内部モード依存のART突入率まで確認済み。性能コアとv0.7 resetBehaviorを改めて複数ソース照合して登録する。
3. 同日〜11月前半にさらに未処理機がないか、ALL7/P-WORLD/当時業界記事/メーカー別5号機一覧で境界監査を続ける。
4. `クラッピーパーク` は2008-11-17導入候補として後続キュー保持。
5. resetBehavior遡及QA再開地点は引き続き **`球児（2006-09）` の次**。
