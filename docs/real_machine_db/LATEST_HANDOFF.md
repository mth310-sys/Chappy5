# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは218件地点（`学習パチスロ 理科` 追加済み）。
- **`パンドラ` を219件目として追加済み。**

## 219. パンドラ

- new record: `docs/real_machine_db/machines/2007-12-25_pandora.md`
- commit: `499861122eb612e67f8c17714a7c0b569edd4073`
- manufacturer: アリストクラートテクノロジーズ
- releaseDate: `2007-12-25`
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + 5G演出用RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合成: `1/299.3 / 1/287.4 / 1/280.1 / 1/269.7 / 1/260.1 / 1/254.1`
- CT/REG合成: `1/655.4 / 1/585.1 / 1/528.5 / 1/504.1 / 1/468.1 / 1/420.1`
- ボーナス合成: `1/205.4 / 1/192.8 / 1/183.1 / 1/175.7 / 1/167.2 / 1/158.3`
- 機械割: `97.5 / 99.8 / 101.7 / 103.7 / 105.9 / 108.0%`
- BIG純増: 約300枚。
- CT純増: 約110枚。
- ツボ/スイカ系契機後に5G RT「パンドラチャンス」。当時回顧でも演出用プチRT・基本ノーマルタイプと確認。
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`。

### CONFLICT / 定義注意

- 第2ボーナス呼称は当時グリーンべると `CT`、5号機クロニクル表 `REG`。同一欄の可能性は高いが推測統一せず `CT/REG` として保持。
- 設定別機械割の全表は今回5号機クロニクル単一系列。別系統直接照合は未取得。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井 `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮/朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 設定変更専用/朝一専用モード `NONE_CONFIRMED`。
- stateAfterReset: 5G RT中の設定変更/電断処理 `UNVERIFIED_AFTER_RESEARCH`。通常時の比較可能な高確/AT/ARTモードは `NONE_CONFIRMED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン/初期出目/7セグ・ランプ表示等、本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された朝一専用数値 `NONE_CONFIRMED`。

### 主要出典

- グリーンべると: https://web-greenbelt.jp/00003422/
- P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2599/greenbelt
- 5号機クロニクル: https://5goki.com/aristocrat
- P-WORLD機種ページ: https://www.p-world.co.jp/machine/database/5045
- パチ7 アリストクラート回顧: https://pachiseven.jp/articles/detail/11837

取得日: 2026-09-01

## 2007年12月 境界監査メモ

### まぁさん

- 一部旧DB/5号機系DBは2007年12月扱い。
- 一方、4Gamer掲載のサミーネットワークス発表文で、ラスター実機「まぁさん」は **2008-01-21（月）のホール実機導入に併せて777タウンへ同時配信** と明記。
- 777TOWN公式も `2008年発売` とする。
- よって2007-12としては登録せず、**2008-01-21導入候補**として次月キューへ送る。
- 旧DBの `マァサン-30 / アルチザン` 表記との型式・メーカー表記揺れも次回同定時に確認する。

## 2008年1月 初期候補メモ

メーカー/年次一覧から少なくとも以下を確認。具体導入日を当時業界記事で突合し、最古未処理から登録する。

- まぁさん（ラスター） — 4Gamer発表文で2008-01-21実機導入同時配信を確認。
- インディ・ジョーンズS（SANKYO）
- 餓狼伝説スペシャル（SNKプレイモア）
- 銀河鉄道物語（SANKYO）
- 島育ち（オリンピア）
- ウルトラキューティーハニー3（メーシー）
- めんそーれ2（エマ）

※年次一覧だけで順序を決めず、当時新台予定/納品開始日を優先して具体日を監査する。

## resetBehavior 遡及QA

- `ランブルローズ（2006-08）` まで補完済み。
- 次の未補完対象は `逮捕しちゃうぞ（2006-08-28）`。
- 新規収集を止めず、余力のある回で既存性能値をやり直さずresetBehaviorのみ補完する。

## 重複防止

- 217: `バーチャファイターF`。再追加禁止。
- 218: `学習パチスロ 理科`。再追加禁止。
- 219: `パンドラ`。再追加禁止。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準219件地点から継続。**
2. 2007年12月をメーカー別一覧・当時新台予定表でもう一度だけ最終監査し、漏れがなければ12月を閉じる。
3. 2008年1月へ進み、上記候補の具体導入日を当時業界記事で突合。**確認できた最古の未処理機種から性能コア+v0.7 resetBehaviorを正式収集する。**
4. `まぁさん` は現時点で `2008-01-21` の強い当時資料あり。2007-12旧DB表記は `CONFLICT_DATE_MONTH` 候補として保持し、2008-01側で正式同定する。
5. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
6. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。
