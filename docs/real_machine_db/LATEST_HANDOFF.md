# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは227件地点（`めんそーれ2-25` 追加済み）。
- **エレコ `リーチ目発見！スロガッパ` を228件目として追加済み。**
- **resetBehavior遡及QAは `球児（2006-09）` を補完済み。**

## 228. リーチ目発見！スロガッパ（エレコ）

- new record: `docs/real_machine_db/machines/2008-02_riichime-hakken-surogappa.md`
- commit: `161e3f2f723ef5a08ef13d068e278651a399dd06`
- manufacturer: エレコ
- modelName / P-WORLD型式: `リーチ目発見スロガッパ4`
- releaseDate: `2008-02`（具体日は `2008-02-11 / 2008-02-25` のCONFLICT）
- generation: 5号機初期
- systemType: ボーナス主体 + 天井RT / リーチ目機
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 同定・時期

- ユニバーサル公式は2008年2月発売。
- パチビーは2008-02-11導入。
- ITmediaの2008-02-19記事は実機が2008-02-25登場と明記。
- 具体日を平均せず `CONFLICT_RELEASE_DATE` として保持し、DB主日付は月精度 `2008-02`。
- main事前検索で独立レコード未登録を確認してから追加。

### 性能コア

- 設定: `1 / 4 / 6 / H`。
- パチマガスロマガ精密値:
  - BIG合成: `1/295.21 / 1/280.07 / 1/260.06 / 1/237.45`
  - REG: `1/409.60 / 1/368.18 / 1/330.99 / 1/300.62`
  - 全ボーナス合成: `1/171.56 / 1/159.07 / 1/145.64 / 1/132.66`
- P-WORLD/pacnk機械割: `99.1 / 102.1 / 106.1 / 110.9%`。
- パチマガスロマガ シミュレートPAYOUT: `98.78 / 102.00 / 106.31 / 111.48%`。
- 上記機械割は平均せず `CONFLICT_PAYOUT_RATE`。
- BIG約310〜312枚、REG約101〜104枚。
- 50枚ベースは信頼できる比較用解析値を確定できず `UNVERIFIED_AFTER_RESEARCH`。個人実戦の体感35G/1000円は物差し値へ不採用。
- 天井RTの精密純増/Gは未確定。解析資料では現状維持程度/若干増える。

### 天井 / v0.7 resetBehavior

- BIG後1000Gで天井RT。
- REG後800Gで天井RT。
- 天井RTは次回ボーナスまで継続する救済機能。
- pacnk系解析で **設定変更後も天井までのゲーム数はリセットされず引き継ぐ** と確認。
- 前日ハマリの宵越し天井狙いが可能。
- ceilingAfterReset: `NO_SHORTENING_CONFIRMED`。
- modeAfterReset: `NONE_CONFIRMED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- powerCycleBehavior、天井RT中の設定変更/電断時残G・状態、本機固有ガックン等は検索語・資料系統変更後も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 主要出典

- ユニバーサル公式: https://www.universal-777.com/product/slot/slogappa/
- グリーンべると: https://web-greenbelt.jp/00003493/
- P-WORLD: https://www.p-world.co.jp/machine/database/5082
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/72/h.php
- パチマガスロマガTOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/72/eleco_slot_72.php
- pacnk: https://pacnk.com/slot/tools/sh_richimehakkensurogappa.html
- パチビー: https://www.pachibee.jp/machines/about/210110012
- ITmedia: https://www.itmedia.co.jp/mobile/articles/0802/19/news123.html
- K-Navi: https://p-kn.com/slot/772/
- 回顧資料: https://slothistory.com/kousin_kako04.html

取得日: 2026-09-01

## resetBehavior 遡及QA

### 球児（2006-09）補完済み

- record: `docs/real_machine_db/machines/2006-09_kyuji.md`
- commit: `3e3bfe94b041543b2fad81a40daa91c525e1fa7a`
- coreStatus: `PARTIAL`（維持）
- resetBehaviorQA: `PARTIAL`
- RT「反撃タイム」は白7BIG後50G、純増約0.47枚/G、ボーナス成立で終了まで補強。
- 通常時ゲーム数天井、リセット短縮、朝一専用モード/恩恵は `NONE_CONFIRMED`。
- 設定変更/据え置き/電源OFF→ON時の反撃タイム状態・残G、本機固有の変更判別は十分な再探索後も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的5号機RT挙動は推測転記しない。

### 次の遡及QA対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 2008年2月境界監査

- 228: `リーチ目発見！スロガッパ`。再追加禁止。
- `パチスロ「PLAYBOY」Limited Edition` は山佐公式で2008年2月稼働、HAZUSEでも2008年2月。具体導入日を追加探索して時系列位置を確定する。
- `パチスロ北斗の拳2 ネクストゾーン 闘` は2008年2月系列。2008-02-18のメーカー発表転載では2月25日時点でホール実機導入前とされるため、2月後半以降として境界監査する。
- `北斗の拳2 ネクストゾーン 将` も同月候補だが具体ホール導入日を別途確定する。
- 2008年2月1〜10の未処理機が新たに確認された場合はそちらを優先し、漏れ防止を優先する。

## 重複防止

既存228件は再追加禁止。兄弟機 `キングガッパ` は別機種・後発なので今回混入させない。2007年 `めんそーれ2-30`、227 `めんそーれ2-25`、226以前の既収録機種も再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準228件地点から継続。**
2. **2008年2月の未処理機を具体導入日で再監査。最優先は `パチスロ「PLAYBOY」Limited Edition` の具体導入日確定。より早い未処理機が見つかればそちらを優先。**
3. 続いて `北斗の拳2 ネクストゾーン 闘 / 将` など2月後半候補を時系列で処理。
4. resetBehavior遡及QAは2006年9月の次の未補完レコードから継続。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
