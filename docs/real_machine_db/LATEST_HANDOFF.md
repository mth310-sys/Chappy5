# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは247件地点 / 最初の実ホール導入確認日2008-04-21 `ビートマニア` まで完了。
- 2008-04-22〜30を境界監査。後年資料の月表記だけで4月後半へ押し込まず、具体日を検索したが今回独立未処理機の確定日根拠を得られなかった。
- `シートラッド / シートラッド30（岡崎産業）` は後年全機種DBで2008年5月導入。具体日はなお未確定のため、5月機として保留し4月へ遡及追加しない。
- 今回、タイヨー `一騎当千` を248件目、`一騎当千A` を249件目として追加。
- 当時グリーンべると記事は2機種の納品開始を2008-05-11、パチビー等はホール導入を2008-05-12とする。DB主日付は実ホール導入基準の2008-05-12、納品日を別定義で保持。
- resetBehavior遡及QAは直前handoffどおり `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 248. 一騎当千（タイヨー）

- record: `docs/real_machine_db/machines/2008-05-12_ikkitousen.md`
- commit: `3668a6aa71e6bf781893cf3bbe5ba2453fd1fb0e`
- releaseDate: `2008-05-12`
- announcedDeliveryStart: `2008-05-11`
- systemType: ボーナス + CZ + RT/ARTループ
- coreStatus: `PARTIAL_CORE_INDIVIDUAL_BONUS_AND_BASE_UNVERIFIED`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 当時業界記事のボーナス合成は設定1 `1/197.1` → 設定6 `1/153.1`。
- BIG約238枚、REG約90枚。
- CZ中リプレイで7G、スイカで77GのRT/ART `関羽雲長 千人斬り!!`。7G主体ループ率約85%、純増約+1.0枚/G。
- 機械割は後年DB間で `96.9 / 98.3 / 99.8 / 102.4 / 104.9 / 107.4%` と `96.1 / 98.3 / 99.6 / 102.8 / 105.9 / 109.1%` 系列が競合。兄弟機Aとの混同可能性もあるため平均せず `CONFLICT_PAYOUT_RATE`。
- 設定別BIG/REG全表と50枚ベースは十分な再探索後も比較可能な直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH_1000G_CZ_CEILING`
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- modeAfterReset: `NOT_APPLICABLE_COMPLEX_INTERNAL_MODE_NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH_CZ_RT_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

## 249. 一騎当千A（タイヨー）

- record: `docs/real_machine_db/machines/2008-05-12_ikkitousen-a.md`
- commit: `6e27ddd756baa742eecee824c48985f2f8d28aaa`
- modelName: `一騎当千A`
- releaseDate: `2008-05-12`
- announcedDeliveryStart: `2008-05-11`
- systemType: ボーナス + CZ + RTループ
- coreStatus: `PARTIAL_CORE_INDIVIDUAL_BONUS_AND_BASE_UNVERIFIED`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- ボーナス合成: `1/197.4 / 1/190.5 / 1/184.1 / 1/172.5 / 1/162.2 / 1/153.1`。当時記事の上下端は `1/197.1 → 1/153.1`。
- BIG約300枚、REG約100枚。実機資料ではBIG349枚超、REG153枚超払い出し終了。
- RT `関羽雲長 千人斬り!!`: 7Gまたは77G、約+0.4枚/G。7G主体ループ率約80%。
- 通常ゲーム1000G消化でCZへ入る天井をP-WORLD、パチビー、中一商事で照合。
- 機械割は5号機クロニクル `97.1 / 98.8 / 100.4 / 103.3 / 104.9 / 107.7%` とpacnk `96.1 / 98.3 / 99.6 / 102.8 / 105.9 / 109.1%` が競合。平均せず `CONFLICT_PAYOUT_RATE`。
- 50枚ベースは直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH_1000G_CZ_CEILING`
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH_NO_SHORTENING_VALUE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE_COMPLEX_INTERNAL_MODE_NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH_CZ_RT_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NORMAL_CEILING_1000G_TO_CZ_ONLY`

### resetBehavior調査要点

- `一騎当千 / 一騎当千A / Dragon Destiny / タイヨー / 青パネル / 赤パネル / 2008` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井短縮 / 1000G / CZ / RT / ART / ガックン / 初期出目` を組み替えて再探索。
- 当時業界、P-WORLD、パチビー、旧/後年解析DB、中古実機アーカイブを横断。
- 現行スマスロ `L 真・一騎当千` のリセット天井400G等が検索結果に大量混入するが、完全な別機種なので2008年初代へ一切流用しない。
- 一騎当千Aの通常1000G→CZは複数資料で確定。一方、設定変更時にそのカウンタをクリア/引継ぎするか、短縮があるか、据え置き/電源OFF→ONでCZ/RT状態を維持するか、本機固有ガックン/初期出目等は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、設定変更専用恩恵/不利、公開朝一専用数値は `NONE_CONFIRMED`。

## 今回の主要出典

取得日: 2026-09-01

- グリーンべると / P-WORLD業界ニュース「タイヨー、ARTループの『一騎当千』発表」
  - https://news.p-world.co.jp/articles/2748/greenbelt
- パチビー「一騎当千A」
  - https://www.pachibee.jp/machines/about/211040011
- P-WORLD「一騎当千A」
  - https://www.p-world.co.jp/machine/database/5163
- 5号機クロニクル「タイヨー5号機全機種一覧」
  - https://5goki.com/taiyo
- pacnk「一騎当千A 設定判別ツール」
  - https://pacnk.com/slot/tools/sh_ikkitousena.html
- 中一商事「タイヨー 一騎当千A」
  - https://www.nakaiti.com/html/sTaiyo005.html
- パチマガスロマガFREE「5号機ヒストリア2008年前編」
  - https://pachimaga.com/free/playback/1192d11673cba62908327e8fbb81e19c017a610d.php
- 5号機クロニクル「岡崎産業」
  - https://5goki.com/okazaki

## 重複防止

- 既存247件の再追加禁止。
- 248 `一騎当千`、249 `一騎当千A` も再追加禁止。
- 2機種は同一タイアップ/同時発表だが、青/赤パネルの単なる外装差ではなく、ボーナス獲得枚数、RT純増、ループ率、機械割系列が異なるスペック違いなので別レコード。
- `L 真・一騎当千`、`一騎当千2`、`一騎当千BB外伝` 等の後継機データを初代へ流用しない。
- `ビートマニア` は5/7通常導入でも247として既登録。再追加しない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準249件地点 / 実ホール導入日2008-05-12まで前進。**
2. **2008-05-01〜11について、月精度のみの候補をもう一度境界監査する。特に `シートラッド / シートラッド30（岡崎産業）` の具体導入日を優先確定し、5/12より早ければ時系列遡及追加する。**
3. 5/12同日群を再監査し、`一騎当千 / 一騎当千A` 以外の未処理機があれば同日順不同で追加する。
4. その後、2008年5月の `格闘美神 武龍 / 潮風-30 / 監獄JACK / ドキューン / ニューパルサー エボリューション / ソニックライブ / 熱血硬派くにおくん / ヒミコスタイル / 大繁盛本舗 江戸ver.` 等を具体導入日で並べ、最古の未処理から進める。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
