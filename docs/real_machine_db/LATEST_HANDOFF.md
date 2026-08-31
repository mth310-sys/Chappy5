# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 181件目 `学習パチスロ国語`（遊人、2007-09-03）までを継承。
- GitHub mainを検索した結果、過去チャット上では処理済み報告のあった `くりぃむしちゅー` の実レコードが最新mainには存在しなかったため、チャット履歴ではなくGitHub正本を優先して未処理扱いとした。
- **182件目として `くりぃむしちゅー`（ロデオ、2007-09-18当時ログ / 複数資料2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-18_cream-stew.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `1d74fb43ce7a22a2bd06cd589c2fb1ffac6720ce`

## 182. くりぃむしちゅー

- manufacturer: ロデオ
- releaseDate: `2007-09-18`（当時更新ログ根拠を継承。後年資料は2007-09月精度で一致）
- generation: 5号機初期
- systemType: ボーナス + RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合成: 設定1 `1/485.45` → 設定6 `1/360.09`
- REG合成: 設定1 `1/753.29` → 設定6 `1/569.88`
- 全ボーナス合成: 設定1 `1/295.21` → 設定6 `1/220.66`
- SUPER BIG: 465枚超払い出し終了 / 純増約448枚
- NORMAL BIG: 420枚超払い出し終了 / 純増約348枚
- REG: 12G消化または8回入賞で終了
- RT `緊急事態` 搭載を確認。
- 50枚ベースとRT純増/Gは、`50枚 / 1000円 / ベース / コイン持ち / RT / 緊急事態` 等で再探索したが比較可能な高信頼値を確定できず `UNVERIFIED`。

### CONFLICT

- 機械割は平均しない。
- パチマガスロマガ・シミュレート: `95.21 / 96.03 / 97.68 / 100.41 / 103.02 / 106.86%`
- 5号機クロニクル: `97.4 / 98.5 / 101.2 / 104.0 / 106.7 / 110.8%`
- 差が大きいため `CONFLICT` として両系列をレコード内に保存。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `UNVERIFIED`（RT `緊急事態` 中の設定変更/電断処理を直接確認できず）
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `くりぃむしちゅー / パチスロくりぃむしちゅー / ロデオ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / RT / 緊急事態` を組み替え、パチマガスロマガ、K-Navi、5号機クロニクル、当時/後年機種整理、旧DB系を横断。
- 通常時天井、リセット短縮天井、朝一専用モード、公開リセット恩恵率/朝一数値は確認できず、本機固有のRT状態処理・変更判別のみ十分な直接資料がなく `UNVERIFIED`。

## 主要出典

### くりぃむしちゅー
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/44/h.php
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/44/a.php
- K-Navi: https://p-kn.com/slot/653/
- 5号機クロニクル ロデオ: https://5goki.com/rodeo
- pachinko's blog 回顧整理: https://pachinko.hatenablog.jp/entry/2007/09/creamStew
- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html

取得日: 2026-09-01

## 9月漏れ監査メモ

- `熊酒場30`、`時空大作戦`、`春夏秋冬` は既存レコード有無をmainで継続監査する。
- `くりぃむしちゅー` は182件目として登録済み。以後重複登録しない。
- `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
- 9月の月精度候補は具体日が取れる資料を優先し、既存レコードより古い未処理機が判明した場合は漏れ防止のため遡及挿入してよい。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` はresetBehavior補完済み（commit `0d36f46f8f51682c72fe19386ffc4e4d89d02ab0`）。
- **次の最古欠損候補は2006年7月 `花盛`。** 現レコード `docs/real_machine_db/machines/2006-07_hanasakari.md` にresetBehaviorが未収集。
- 今回、`花盛 / SNKプレイモア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / RT` の先行検索を実施したが、本機固有のreset情報はまだ確定できていない。次回は公式・パチマガ・古い攻略/アーカイブをさらに横断してから欠損判定する。

## 次回再開地点

1. **LATEST_HANDOFF基準182件地点から継続。** `熊酒場30`、`時空大作戦`、`春夏秋冬` を含む2007年9月候補について最新mainの既存レコードを検索し、未処理かつ導入時期を高信頼資料で確認できる最古機から追加する。
2. 2007年9月を閉じた後に2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
3. resetBehavior遡及QAは **2006年7月 `花盛`** から再開。既存性能コアは無駄にやり直さず、v0.7 resetBehaviorだけを補完する。
4. PARTIAL/UNVERIFIEDは検索語・型式/メーカー/シリーズ表記と資料系統を変えて再探索し、競合値は平均せず `CONFLICT` を維持する。