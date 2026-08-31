# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md`、直近commitを確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 184件目 `西部警察` までを継承。
- **185件目として `ストップ!! ひばりくん!`（SANKYO、2007-09-02）を9月漏れとして遡及追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-02_stop-hibari-kun.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `6d8945139f4363ce4fd7d34f80cd8f38727f369c`

## 185. ストップ!! ひばりくん!

- manufacturer: SANKYO
- formalModel: `ストップ!! ヒバリクン!S`
- releaseDate: `2007-09-02`（2007-07-27付グリーンべると当時記事が納品開始日を明記。SANKYO公式/P-WORLDは2007.09）
- generation: 5号機初期
- systemType: A+RT / ボーナス+固定G数RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 4段階設定。SANKYO公式・P-WORLDで設定別BB/RB/合算一致。
- 設定1: BB 1/404 / RB 1/555 / 合算 1/234 / 機械割96%
- 設定2: BB 1/374 / RB 1/516 / 合算 1/217 / 機械割99%
- 設定3: BB 1/346 / RB 1/485 / 合算 1/202 / 機械割103%
- 設定4: BB 1/324 / RB 1/452 / 合算 1/188 / 機械割106%
- BIG: 純増約310枚、346枚超払い出し終了。
- REG: 純増約100枚、12Gまたは8回入賞で終了。
- BIG後RT「ひばりステージ」33Gまたは77G。
- 50枚ベース、RT純増/Gは表記揺れ・項目語・資料系統を変えて再探索したが確定できず `UNVERIFIED`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: `NONE_CONFIRMED / RT残G処理はUNVERIFIED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `RT中の設定変更・据え置き・電断時状態処理はUNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `ストップ!!ひばりくん! / ストップ!!ヒバリクン!S / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / RT残り / 天井 / 天井短縮 / モード / ガックン / 変更判別` を組み替え、メーカー公式、当時業界記事、P-WORLD、旧解析/回顧資料を横断。
- 通常時ゲーム数天井、短縮天井、朝一専用モード、設定変更専用恩恵/不利、公開朝一数値は確認できず `NONE_CONFIRMED`。
- RT33/77G中の設定変更・据え置き・電断処理は本機固有の直接資料が取れず `UNVERIFIED`。一般的な5号機挙動から推定しない。

## 主要出典

### ストップ!! ひばりくん!
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/530/
- SANKYO公式ミニパンフ: https://www.sankyo-fever.jp/assets/images/collection/pamphlet/1121.pdf
- グリーンべると（2007-07-27、P-WORLDアーカイブ）: https://news.p-world.co.jp/articles/2310/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/4857

取得日: 2026-09-01

## 9月漏れ監査メモ

- `ストップ!! ひばりくん!` を185件目として追加し、2007-09-02納品開始を確定。
- `ぱちすろおり姫は告知がお好き` は既存 `2007-09-16_orihime-kokuchi.md`。
- `ビーキッズクラブR` は既存 `2007-09-17_bee-kids-club-r.md`。
- `DECOICHI` は既存 `2007-09-17_decoichi.md`。
- `エリア88` は既存 `2007-09-25_area88-a.md`。
- **`ハワイ-30 / ハワイ30` はmain検索で独立レコードを確認できず、次の優先漏れ候補。** 2007-07-25付K-Navi当時記事でNET製30φ機、ホールデビュー9月上旬予定を確認。後年5号機クロニクル/Pacnkも2007年9月機として掲載。具体導入日→性能コア→resetBehaviorを再探索する。
- P-WORLD 2007年9月一覧とmain既存群を引き続き突合し、ハワイ-30より古い具体日が判明する未処理機があれば漏れ防止を優先する。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` はresetBehavior補完済み（commit `0d36f46f8f51682c72fe19386ffc4e4d89d02ab0`）。
- **次の最古欠損候補は2006年7月 `花盛`。** 現レコード `docs/real_machine_db/machines/2006-07_hanasakari.md` にresetBehaviorが未収集。

## 次回再開地点

1. **LATEST_HANDOFF基準185件地点から継続。** 2007年9月残漏れ `ハワイ-30` を最優先で、具体導入日→性能コア→v0.7 resetBehaviorを再探索し、main未処理なら186件目として追加する。
2. 同時にP-WORLD 2007年9月全29機種とmain既存レコードを突合し、より古い具体導入日の未処理機が判明した場合はそちらを先に遡及追加する。
3. 9月漏れ監査を閉じた後、2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
4. resetBehavior遡及QAは **2006年7月 `花盛`** から再開。既存性能コアはやり直さず、v0.7 resetBehaviorのみ補完する。
5. PARTIAL/UNVERIFIEDは検索語・型式/メーカー/シリーズ表記と資料系統を変えて再探索し、競合値は平均せず `CONFLICT` を維持する。
