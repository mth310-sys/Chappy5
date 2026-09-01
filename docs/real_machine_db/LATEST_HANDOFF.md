# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは235件地点。235 `がんばれ元気 激闘編` まで追加済み。
- 今回、直前指定の最優先漏れ候補 `ジアマゾンロード` を調査し、236件目として遡及追加。
- `ジアマゾンロード` は具体導入日を十分再探索したが確定できず、複数資料で一致する `2008-03` の月精度で保存。日付を推測補完しない。
- 導入時系列の具体日最新前進地点は引き続き2008-03-24。月精度レコードとして `ジアマゾンロード` を追加済み。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 236. ジアマゾンロード（ラスター / ウィンネットテクノロジー）

- new record: `docs/real_machine_db/machines/2008-03_ji-amazon-road.md`
- manufacturer: ラスター（型式/製造） / ウィンネットテクノロジー（発売・販売）
- modelName: `ジ アマゾンロード`
- releaseDate: `2008-03`
- releaseDateConfidence: `ANALYSIS_HIGH_MONTH / UNVERIFIED_EXACT_DAY`
- generation: 5号機初期
- systemType: ボーナス + RT/ART（激アマゾーン）
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- ボーナス合成は全設定 `1/136.53`。
- プレミアムBIG: 設定1/2 `1/32768`、3/4 `1/21845.33`、5/6 `1/16384`。
- 赤7BIG: `1/819.20 → 1/771.01`。
- 白7MID: `1/414.78 → 1/434.01`（高設定ほど軽くなる項目ではなく逆方向）。
- SHORT 2種は各全設定 `1/546.13`。
- パチマガスロマガのシミュレート機械割: `97.17 / 99.08 / 100.27 / 103.22 / 105.07 / 107.58%`。
- 5号機クロニクル: `96.0 / 98.0 / 100.5 / 103.7 / 106.9 / 112.0%`。
- 特に設定6で差が大きいため `CONFLICT_PAYOUT_RATE`。平均化しない。
- 50枚ベースは表記・資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- BIG: 350枚超払い出し終了 / 純増約240枚。
- MID: 140枚超払い出し終了 / 純増約99枚。
- SHORT: 60枚超払い出し終了 / 純増約56枚。
- `激アマゾーン`: 1〜100Gは約+0.5枚/G、101G以降は約+1.0枚/G、ボーナス成立まで継続。
- プレミアムBIGはボーナス7回以上確定との当時資料あり。
- ゲーム数救済は5段階。P-WORLD当時掲示板では第一帯575〜625Gから最深帯975〜1025G、後年整理では575〜1025Gの5段階・平均約800G。回顧資料の600/700/800/900/1000G表記は中心値表現の可能性があるため別記して保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- modeAfterReset / stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties / numericResetData: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- 本機はゲーム数救済があるため朝一のカウンタ処理が重要だが、設定変更/据え置き/電源OFF→ONごとの直接根拠は発見できず一般論で補完しない。
- `ジアマゾンロード / ジ アマゾンロード / アマゾンロード / ラスター / ウィンネット` と、設定変更/リセット/朝一/朝イチ/据え置き/電源OFF ON/天井/575/1025/ガックンを組み替え、当時解析・旧DB・P-WORLD・業界史・回顧資料を横断済み。

## 今回の境界監査メモ

- `ジアマゾンロード` は2008-02-13のプレス発表を当時業界記事で確認。5号機クロニクル、pacnk、後年一覧は2008年3月導入で一致するが、全国導入の具体日は確定できなかった。
- 型式/検定側ではラスター、当時のプレス発表・攻略サイトではウィンネットテクノロジー発売として扱われるため、メーカー帰属は役割を分けて併記。
- 2008-03-25〜03-31の残監査で、`256（ジゴロ）` は当時業界史に `2008-03-31発売` 記録があり、main検索では未登録。次回最優先候補。
- `ハナダマシイ / ハナダマシイ-30` は既に232/233として登録済みのため再追加禁止。当時業界史には3/31発売（2/11先行導入）記録もあるので、既存レコードの日付根拠QA時に照合対象とする。

## 今回の主要出典

取得日: 2026-09-01

### ジアマゾンロード
- プレイグラフ転載（2008-02-19更新、2/13プレス発表）: https://p-mans.blogspot.com/2008/02/
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/04/a.php
- パチマガスロマガ ボーナス/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/04/h.php
- K-Navi 基本: https://p-kn.com/slot/782/
- K-Navi 激アマゾーン: https://p-kn.com/slot/782/5253/
- 5号機クロニクル ウィンネット: https://5goki.com/winnet
- P-WORLD: https://www.p-world.co.jp/machine/database/5111
- P-WORLD当時掲示板: https://www.p-world.co.jp/kisyubbs/bbs.cgi?file=p5111
- pacnk 設定判別/天井整理: https://pacnk.com/slot/tools/sh_amz.html
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html / https://slothistory.com/kousin_kako05.html
- 回顧補助: https://ameblo.jp/amebunqaz/entry-12832437295.html

## 重複防止

- 既存235件の再追加禁止。
- 236 `ジアマゾンロード` も再追加禁止。
- `ハナダマシイ / ハナダマシイ-30` は232/233登録済み。3/31発売資料を見つけても新規追加せず既存日付QAへ回す。
- ラスターとウィンネットテクノロジー表記の違いを別機種扱いして `ジアマゾンロード` を二重登録しない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準236件地点から継続。**
2. **2008-03-25〜03-31残監査を継続。最優先はmain未登録の `256（ジゴロ）`。当時業界史の2008-03-31発売記録を再確認し、型式・性能コア・v0.7 resetBehaviorを収集する。**
3. 同じ3/31前後の未処理機をメーカー/業界一覧で再監査し、3月列を閉じてから4月へ進む。
4. 既知4月候補は北電子 `月光仮面2A`（2008-04-07発売記録）、アルゼ `アレックス7R`（2008-04-21発売記録）。3月未処理を優先。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
