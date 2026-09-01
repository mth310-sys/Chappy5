# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは242件地点 / 2008-04-13 `お天気お姉さん` まで完了。
- 今回、2008-04-14発売のベルコ兄弟機 `デジスロF` を243件目、`デジスロV-30` を244件目として追加。
- 25φ `デジスロF` と30φ `デジスロV-30` はRT構造と設定別性能が異なるため独立レコード。相互の性能値は流用していない。
- 導入時系列の具体日前進地点は **2008-04-14**。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 243. デジスロF（ベルコ）

- record: `docs/real_machine_db/machines/2008-04-14_digislo-f.md`
- commit: `27baaf5486b8a6d44265d6afd676dca6e72f9444`
- releaseDate: `2008-04-14`
- releaseDateConfidence: `OLD_INDUSTRY_HISTORY_EXACT_DATE`
- systemType: ボーナス主体 + 天井RT（25φ）
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/297.89 / 1/292.57 / 1/282.48 / 1/277.69 / 1/273.07 / 1/264.26`。
- CB: `1/585.14 / 1/564.97 / 1/546.13 / 1/528.52 / 1/512.00 / 1/512.00`。
- 機械割: `98.48 / 99.46 / 101.24 / 102.73 / 104.05 / 105.62%`。5号機クロニクル丸め値と実質一致。
- BIG約312枚、CB約221枚。
- ボーナス間777Gで現状維持型の天井RTへ入り、ボーナス成立まで継続。
- 50枚ベースと天井RTの正確な純増/Gは検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- 777G天井RT自体は確認済み。
- 設定変更時の777Gカウンタリセット、据え置き/電源OFF→ON時の引継ぎ、天井短縮、設定変更専用状態は本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、公開朝一恩恵/不利数値、ガックン等の変更判別は `NONE_CONFIRMED / UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE`。

## 244. デジスロV-30（ベルコ）

- record: `docs/real_machine_db/machines/2008-04-14_digislo-v30.md`
- commit: `cc81c854c6a33c0815dbe1196db47aeca615b9d5`
- modelName: `デジスロV-30`
- releaseDate: `2008-04-14`
- releaseDateConfidence: `OLD_INDUSTRY_HISTORY_EXACT_DATE`
- systemType: ボーナス + CZ経由RT（30φ）
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/372 / 1/356 / 1/341 / 1/334 / 1/321 / 1/309`。
- CB: `1/564 / 1/546 / 1/528 / 1/496 / 1/468 / 1/455`。
- 機械割は資料差を平均せず `CONFLICT_MINOR_PAYOUT_RATE`:
  - pacnk: `97.8 / 100.0 / 102.2 / 104.4 / 107.1 / 109.5%`
  - 5号機クロニクル: `97.9 / 100.1 / 102.3 / 104.5 / 107.2 / 109.6%`
- BIG約312枚、REG/CB約221枚。
- 通常時150GでCZ、CZ中デジスロ図柄揃いで50G RT「チャンスタイム」。RTは現状維持レベルで終了後もCZへ戻る。
- 50枚ベースとRTの正確な純増/Gは `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior

- 150G→CZ周期自体は整理資料で確認。
- 設定変更で150G周期がリセットされるか、据え置き/電源OFF→ONで引き継ぐか、設定変更時CZ/RT状態、残G処理は本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、短縮周期、公開朝一専用数値、本機固有のガックン/初期出目判別は確認できず。
- 有利区間は `NOT_APPLICABLE`。

## 今回の境界監査

- ベルコ公式は両機を2008年4月登場として掲載。
- P-WORLDは `デジスロF` と型式 `デジスロV-30` を別機種として掲載し、V-30は30Φを明記。
- 旧業界史 `パチスロ業界初まとめ` は両機を **2008/4/14発売** と記録。
- 同資料は兄弟機差として「30φ側のみ通常RTが存在」を後年にも明記。25φ/30φを単なる径違いとして統合しない。
- 2008-04-15〜19の未処理機を次回漏れ監査し、その後4/20納品候補 `エイリアン2` / `クイージ` へ進む。
- `ビートマニア` は4/21一部先行導入と5/7本導入の区別を保持する。

## 今回の主要出典

取得日: 2026-09-01

### デジスロF / デジスロV-30共通
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/digislo_2008/
- 5号機クロニクル: https://5goki.com/bellco
- パチスロ業界初まとめ 更新情報5: https://slothistory.com/kousin_kako05.html
- パチスロ業界初まとめ 更新情報7: https://slothistory.com/kousin_kako07.html
- 当時攻略記事アーカイブ: https://plaza.rakuten.co.jp/mosnet/diaryall/

### デジスロF
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/81/a.php
- pacnk: https://pacnk.com/slot/tools/sh_dezisurof.html
- P-WORLD: https://www.p-world.co.jp/machine/database/5123

### デジスロV-30
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/82/a.php
- pacnk: https://pacnk.com/slot/tools/sh_dejisurov.html
- P-WORLD: https://www.p-world.co.jp/machine/database/5124

## 重複防止

- 既存242件の再追加禁止。
- 243 `デジスロF`、244 `デジスロV-30` も再追加禁止。
- `デジスロV30` / `デジスロV‐30` は244の表記揺れとして扱い、別レコードにしない。
- 25φFと30φV-30は兄弟機だが性能・RT仕様が異なるため相互転記禁止。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準244件地点 / 2008-04-14まで完了。**
2. **2008-04-15〜19をメーカー一覧・旧業界史・pacnk等で漏れ監査し、具体導入日の最古未処理5号機から続行。**
3. 現時点の後続具体候補は4/20納品開始 `エイリアン2（アビリット）` と `クイージ（コルモ / SNKプレイモア総販売）`。
4. `ビートマニア（KPE）` は4/21一部先行 / 5/7本導入の定義差を維持して挿入位置を判断する。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、複数系統を横断してから `UNVERIFIED` 判定する。
