# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md`、直近commitを確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 183件目 `マスクオブゾロ` までを継承。
- 直近commit履歴と実ファイルを再確認した結果、旧handoffで「次候補」となっていた `ハイサイネオ` はすでに `docs/real_machine_db/machines/2007-09_haisai-neo.md` として登録済み（commit `6d5bdd4cf2dc5fb7991adec8b503ffc328b48213`）。重複追加しない。
- `ビッグハイビ-30` も `docs/real_machine_db/machines/2007-09-03_big-haibi-30.md` が既存。2007-08-10付グリーンべるとでは9月2日納品開始予定を確認したため、9月初頭漏れとしては既収録扱いで通過。
- **184件目として `西部警察`（ニューギン、2007-09-09）を9月漏れとして遡及追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-09_seibu-keisatsu.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `20f2218fd93b0a05029aa97d648e2a71311246b9`

## 184. 西部警察

- manufacturer: ニューギン
- formalModel: `セイブケイサツX`
- releaseDate: `2007-09-09`（2007-08-24付グリーンべると記事が納品日を明記）
- generation: 5号機初期
- systemType: A+RT / ボーナス+固定G数RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 青BIG: 設定1 `1/443` → 設定6 `1/299`
- 赤BIG: 設定1 `1/1040` → 設定6 `1/898`
- 黒BIG: 設定1 `1/1040` → 設定6 `1/898`
- ボーナス合成: 設定1 `1/239` → 設定6 `1/180`
- 機械割: 設定1 `95.8%` → 設定6 `110.9%`
- 50枚ベース: 約38G
- 青7BIG: 約300枚
- 赤7BIG: 約200枚 + RT50G
- 黒7BIG: 約100枚 + RT100G
- RT「木暮チャンス」完走時増加見込み: 50G約17.6枚 / 100G約35.3枚
- 当時業界記事の設定6合成約1/180と、後年設定別DBの1/180が整合。
- 全設定のボーナス表・機械割は5号機クロニクルの後年整理値のため `ANALYSIS_SINGLE`、設定6合成は当時業界記事で照合済み。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: `NONE_CONFIRMED / RT残G処理はUNVERIFIED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `RT中の設定変更時状態処理はUNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `西部警察 / 西部警察X / セイブケイサツX / ニューギン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / RT残り / 天井 / ガックン / 変更判別` を組み替え、当時業界記事、P-WORLD、パチマガスロマガ保存ページ、5号機クロニクル、旧DB/回顧資料を横断。
- 通常時天井、リセット短縮、朝一専用モード、公開朝一恩恵/不利数値は確認できず `NONE_CONFIRMED`。
- ボーナス後RT50/100Gを持つためRT中の設定変更/電断/据え置き処理は意味があるが、本機固有の直接資料を確定できず `UNVERIFIED`。一般的5号機挙動から推定しない。

## 主要出典

### 西部警察
- グリーンべると（2007-08-24）: https://web-greenbelt.jp/00004285/
- P-WORLD: https://www.p-world.co.jp/machine/database/4880
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/03/a.php
- パチマガスロマガ 機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/03/newgin_slot_03.php
- 5号機クロニクル ニューギン＆エキサイト: https://5goki.com/newgin-excite

取得日: 2026-09-01

## 9月漏れ監査メモ

- `ハイサイネオ` は既存（commit `6d5bdd4cf2dc5fb7991adec8b503ffc328b48213`）。旧handoffの次候補記述は実ファイル/commit履歴より古いので無視する。
- `ビッグハイビ-30` は既存 `2007-09-03_big-haibi-30.md`。当時記事では9/2納品開始予定。
- `KODA KUMI PACHISLOT LIVE IN HALL` は既存 `2007-09-17_koda-kumi-pachislot-live-in-hall.md`。
- `ザ・ドゥーナッツのトンdeピース`、`サザンドリーム`、`恐怖新聞`、`クレイジージョーカー`、`熊酒場30`、`時空大作戦`、`春夏秋冬` もmain既存確認済み。
- `ストップ!! ひばりくん!` は最新main検索で独立レコードを確認できず。SANKYO公式オンライン博物館で導入年月2007.09、型式 `ストップ!! ヒバリクン!S`、BB後33/77G RT、設定1〜4のBB/RB/合算を先行確認済み。具体導入日・設定5/6有無/数値・機械割・ベース・resetBehaviorを再探索して未処理なら次に追加する。
- `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` はresetBehavior補完済み（commit `0d36f46f8f51682c72fe19386ffc4e4d89d02ab0`）。
- **次の最古欠損候補は2006年7月 `花盛`。** 現レコード `docs/real_machine_db/machines/2006-07_hanasakari.md` にresetBehaviorが未収集。

## 次回再開地点

1. **LATEST_HANDOFF基準184件地点から継続。** 2007年9月残漏れ `ストップ!! ひばりくん!` を最優先で、具体導入日→性能コア→v0.7 resetBehaviorを再探索し、main未処理なら185件目として追加する。
2. 同時に9月の他候補をmain既存検索し、日付がより古い未処理機が判明した場合は漏れ防止を優先して遡及追加する。
3. 9月漏れ監査を閉じた後、2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
4. resetBehavior遡及QAは **2006年7月 `花盛`** から再開。既存性能コアはやり直さず、v0.7 resetBehaviorのみ補完する。
5. PARTIAL/UNVERIFIEDは検索語・型式/メーカー/シリーズ表記と資料系統を変えて再探索し、競合値は平均せず `CONFLICT` を維持する。
