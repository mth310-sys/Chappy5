# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 180件目 `ハイサイネオ`（トロージャン、2007-09）までを継承。
- **181件目として `学習パチスロ国語`（遊人、2007-09-03発売）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-03_gakushu-pachislot-kokugo.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `737549b64e5d142e9390f510ea9f50689e12844f`

## 181. 学習パチスロ国語

- manufacturer: 遊人
- formalModel: `学習パチスロ2`（2007年当時更新ログ表記）
- releaseDate: `2007-09-03`
- generation: 5号機初期
- systemType: ノーマル / BIG + CB
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- 2007年当時のパチスロ業界初まとめ更新ログは `学習パチスロ2` を `学習パチスロ国語` と同定し、2007-09-03発売と記録。
- P-WORLDと5号機クロニクルも2007年9月導入で一致。
- HAZUSEは2007-08-27作成ページ上部に2007年8月と記載するため時期表記差は保持するが、具体発売日は当時更新ログの2007-09-03を本線とした。

### 性能コア

- BIG: 設定1 `1/648.87` → 設定6 `1/537.18`
- CB: 設定1 `1/277.69` → 設定6 `1/229.95`
- 合算: 設定1 `1/194.47` → 設定6 `1/161.02`
- BIG: 345枚超払い出し終了 / 純増約312枚
- CB/第二ボーナス: 240枚超払い出し終了 / 純増約221枚
- 50枚ベースは検索語・資料系統を変えて再探索したが比較可能数値を確定できず `UNVERIFIED`。
- 機械割はパチマガスロマガのシミュレート `97.38 / 99.00 / 101.39 / 103.63 / 106.07 / 108.55%` と、5号機クロニクル `97.3 / 98.8 / 101.0 / 103.1 / 105.3 / 107.6%` が一致しないため平均せず `CONFLICT`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `学習パチスロ国語 / 学習パチスロ2 / 遊人` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井` を組み替え、P-WORLD、HAZUSE、パチマガスロマガ、旧DB、回顧資料を横断したが、本機固有の設定変更/電断処理・変更判別・公開朝一数値は確定できなかった。

## resetBehavior 遡及QA

- 2006年5月群を最新mainで再監査し、`ゴールドシオ30`、`ザ・キング・オブ・ファイターズ`、`ルーニー・テューンズ バック・イン・アクション` は既にresetBehavior補完済みであることを確認。
- 2006年6月群も既作業の `ちゅら姫SUN`、`ロード・オブ・ザ・リング`、`サンダーバードNEO-XX` を重複改変せず通過。
- **最古欠損として2006年7月 `新造人間キャシャーン`（型式パープル2）を補完。**
- 既存性能コア/`PARTIAL`判定は維持し、resetBehaviorのみ追加。commit: `0d36f46f8f51682c72fe19386ffc4e4d89d02ab0`
- 本機はRT + インタラクティブAT搭載だが、設定変更/据え置き/電源OFF→ON時のRT/AT・3ステージ状態処理、ガックン、公開朝一数値は本機固有資料で確定できず `UNVERIFIED`。
- JPS後続 `ホークIII` の「設定変更後RT」は確認できたが、別機種仕様のためキャシャーンへ流用していない。
- 次の最古欠損候補は **2006年7月 `花盛`**。最新mainでresetBehavior未収集を確認済み。

## 主要出典

### 学習パチスロ国語
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/03/h.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4867
- 5号機クロニクル: https://5goki.com/u-jin
- HAZUSE: https://hazuse.com/i/data/gakushupachisurokokugo/top.htm
- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html
- ぱち馬鹿っ!! 回顧実機動画: https://www.youtube.com/watch?v=ZP5_mRUpGNY

### 新造人間キャシャーン reset QA
- グリーンべると: https://web-greenbelt.jp/00004745/
- コムシード当時ニュースリリース: https://www.commseed.net/news-old/pdf/news_pdf/2006/060720_p1.pdf
- パチ7 JPS歴史回顧: https://pachiseven.jp/articles/detail/11436

取得日: 2026-09-01

## 9月漏れ監査メモ

- `熊酒場30`、`時空大作戦`、`春夏秋冬` は既存レコード有無をmainで継続監査する。
- `くりぃむしちゅー` は当時更新ログで2007-09-18発売表記を確認できるため、既存レコード未登録なら優先候補。
- `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。

## 次回再開地点

1. **LATEST_HANDOFF基準181件地点から継続。** 2007年9月の既存レコード重複を再確認したうえで、未処理なら `くりぃむしちゅー`（ロデオ、当時ログ2007-09-18発売）を優先して性能コア＋v0.7 resetBehaviorを収集する。
2. `春夏秋冬` を含む9月月精度候補を再監査し、既存なら重複を避け、未処理かつ高信頼な導入時期が取れた機種だけ追加する。
3. 9月を閉じた後に2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
4. resetBehavior遡及QAは **2006年7月 `花盛`** から再開。既存性能判定を崩さずresetBehavior QAだけを補完する。
5. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合値は平均せず `CONFLICT` を維持する。