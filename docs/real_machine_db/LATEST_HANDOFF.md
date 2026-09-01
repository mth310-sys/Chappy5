# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは219件地点（`パンドラ` 追加済み）。
- 2007年12月のメーカー別/当時新台予定境界を再監査し、`まぁさん` は当時4Gamer資料から2008-01-21実機導入候補であることを維持。12月本線を閉じて2008年1月へ前進。
- **`銀河鉄道物語` を220件目として追加済み。**

## 220. 銀河鉄道物語

- new record: `docs/real_machine_db/machines/2008-01-07_ginga-tetsudo-monogatari.md`
- commit: `d14b524dbde7d8bbc68209b6f9cedb1f0a4e9a4b`
- manufacturer: SANKYO
- releaseDate: `2008-01-07`
- generation: 5号機
- systemType: ボーナス主体 + RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入日の同定

- SANKYO公式: `2008.01`。
- 当時グリーンべると: 2007-11-28発表、銀河鉄道物語/インディ・ジョーンズSとも「1月上旬の納品予定」。
- 当時系旧DB「パチスロ業界初まとめ」: 両機 `2008/1/7発売`。
- 日精度は旧DB値を採用し、公式月/当時業界の1月上旬で整合確認。

### 性能コア

- BIG: `1/528.52 / 1/512.00 / 1/478.36 / 1/461.52 / 1/436.91 / 1/420.10`
- MB合成: `1/368.18 / 1/327.68 / 1/309.13 / 1/287.44 / 1/284.94 / 1/264.26`
- MC: `1/381.02 / 1/352.34 / 1/344.93 / 1/319.69 / 1/304.82 / 1/327.68`
- 全ボーナス合成: `1/138.26 / 1/127.50 / 1/121.59 / 1/113.98 / 1/110.14 / 1/108.50`
- 機械割（パチマガスロマガ・シミュレート）: `96.91 / 99.80 / 103.01 / 105.83 / 107.95 / 111.24%`
- 50枚ベース: `36.52 / 37.28 / 37.05 / 37.57 / 37.36 / 38.17G`
- BIG純増: 約260枚。
- MB: 約100〜200枚。最大クラス約200枚 + RT100G。
- MC: 約50枚。
- RT「ビッグワンタイム」: BIG後50G、MB3回クリア後100G。
- RT純増/G: `UNVERIFIED_AFTER_RESEARCH`。

### CONFLICT

- `CONFLICT_PAYOUT_SOURCE`: パチマガスロマガのシミュレート機械割とハズセの `97/100/103/105/107/110%` は設定4〜6で単純丸め以上の差。平均せず双方保持。
- `CONFLICT_SOURCE_IDENTITY`: 5号機クロニクルの「銀河鉄道物語」欄は、公式/当時解析と根本的に異なるBIG/REG確率、BIG後100G RT「ギャラクシーラッシュ」を掲載。SANKYO公式・当時グリーンべると・パチマガスロマガ・P-WORLD・ハズセの一致系列を主系列とし、5号機クロニクル値は別機種データ混入の可能性を疑うが断定せず物差し値から除外。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井 `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮/朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 設定変更専用/朝一専用内部モード `NONE_CONFIRMED`。ストーリー/ギャラクシーはプレイヤー選択式演出モードなので除外。
- stateAfterReset: RT中の設定変更/据え置き/電断処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン/初期出目/液晶・タッチパネル表示等、本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された朝一専用数値 `NONE_CONFIRMED`。

### 主要出典

- SANKYO公式: https://www.sankyo-fever.jp/collection/524/
- グリーンべると: https://web-greenbelt.jp/00004376/
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/12/sankyo_slot_12.php
- P-WORLD: https://www.p-world.co.jp/machine/database/5008
- ハズセ: https://hazuse.com/machine/pachislot/7S0559/

取得日: 2026-09-01

## 2008年1月 初期候補監査

- `銀河鉄道物語` / `インディ・ジョーンズS`: 当時グリーンべるとで両機1月上旬納品予定、旧DBで両機2008-01-07発売。銀河鉄道物語を220件目として先行登録。
- `餓狼伝説スペシャル`: グリーンべるとでトップ納品 `2008-01-20` 予定。関東1都6県は部品供給不足で遅延し1/27以降納品見通し。
- `まぁさん`: 4Gamer掲載のサミーネットワークス発表文で `2008-01-21` 実機導入同時配信。旧DBの2007-12表記は `CONFLICT_DATE_MONTH` 候補として維持。
- `インディ・ジョーンズS` と同日候補のため、**次回は同機を最優先で正式収集**する。
- その後、餓狼伝説スペシャル/まぁさん/銀河鉄道物語以外の1月候補（島育ち、ウルトラキューティーハニー3、めんそーれ2等）の具体日を当時業界記事で再比較する。

## resetBehavior 遡及QA

- `ランブルローズ（2006-08）` まで補完済み。
- 次の未補完対象は `逮捕しちゃうぞ（2006-08-28）`。
- 新規収集を止めず、余力のある回で既存性能値をやり直さずresetBehaviorのみ補完する。

## 重複防止

- 217: `バーチャファイターF`。再追加禁止。
- 218: `学習パチスロ 理科`。再追加禁止。
- 219: `パンドラ`。再追加禁止。
- 220: `銀河鉄道物語`。再追加禁止。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準220件地点から継続。**
2. **2008-01-07同日候補 `インディ・ジョーンズS` を次の未処理機種として最優先で性能コア + v0.7 resetBehavior正式収集。**
3. 導入日はSANKYO公式 `2008.01`、当時グリーンべると `1月上旬納品予定`、旧DB `2008-01-07発売` を既に確認。日精度は再確認して保存する。
4. その後は `餓狼伝説スペシャル（トップ納品予定2008-01-20）`、`まぁさん（2008-01-21実機導入資料）` を含む1月候補の日付を再比較し、未処理最古順に前進。
5. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
6. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。
