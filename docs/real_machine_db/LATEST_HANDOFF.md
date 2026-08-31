# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 182件目 `くりぃむしちゅー`（ロデオ、2007-09-18）までを継承。
- 9月候補をmain検索し、`熊酒場30`、`時空大作戦`、`春夏秋冬` は既存レコード済みであることを確認。重複登録しない。
- **183件目として `マスクオブゾロ`（ロデオ、2007-09月精度）を登録済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_mask-of-zorro.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `70e5d5c5a7aaf84626079e695e3af65b6d440824`

## 183. マスクオブゾロ

- manufacturer: ロデオ
- releaseDate: `2007-09`（5号機クロニクル等で月精度確認。具体的な納品開始日は高信頼資料で確定できず推測しない）
- generation: 5号機初期
- systemType: ノーマル / ボーナス主体 / 複数ボーナス
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合成: 設定1 `1/366.12` → 設定6 `1/302.01`
- ZBB合成: 設定1 `1/287.44` → 設定6 `1/234.06`
- 全ボーナス合成: 設定1 `1/146.61` → 設定6 `1/118.30`
- 50枚ベース: 設定1 `35.21G` → 設定6 `39.31G`
- BIG: 345枚超払い出し終了 / 純増約312枚
- REG: 105枚超払い出し終了 / 純増約104枚
- ZBB-A: 29枚超払い出し終了 / 純増約26枚
- ZBB-B: 253枚超払い出し終了 / 純増約221枚

### CONFLICT

- 機械割は平均しない。
- パチマガスロマガ・シミュレート: `97.80 / 99.95 / 102.55 / 105.30 / 107.94 / 112.59%`
- 5号機クロニクル: `96.5 / 98.5 / 101.2 / 103.8 / 106.6 / 111.0%`
- 丸めでは説明できない差のため `CONFLICT` として両系列を保持。

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
- `マスクオブゾロ / マスク・オブ・ゾロ / ロデオ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 変更判別` を組み替え、パチマガスロマガ、P-WORLD、5号機クロニクル、旧DB/回顧資料を横断。
- 通常時天井、リセット短縮、朝一専用モード、公開朝一恩恵/不利数値は確認できず `NONE_CONFIRMED`。
- 本機固有の設定変更時・据え置き時・電源OFF→ON時の初期処理、ガックン等変更判別は直接資料が足りず `UNVERIFIED`。一般的な5号機挙動から推定しない。

## 主要出典

### マスクオブゾロ
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/a.php
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/h.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4912
- 5号機クロニクル ロデオ: https://5goki.com/rodeo

取得日: 2026-09-01

## 9月漏れ監査メモ

- `熊酒場30` は `docs/real_machine_db/machines/2007-09-02_kuma-sakaba-30.md` が既存。
- `時空大作戦` は `docs/real_machine_db/machines/2007-09_jikuu-daisakusen.md` が既存。
- `春夏秋冬` は `docs/real_machine_db/machines/2007-09-24_slot-shunkashuto.md` が既存。
- `くりぃむしちゅー` は182件目、`マスクオブゾロ` は183件目として登録済み。以後重複登録しない。
- `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
- 9月残候補は `ハイサイネオ` などをmain既存検索→導入月/具体日確認→未処理なら追加、の順で監査する。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` はresetBehavior補完済み（commit `0d36f46f8f51682c72fe19386ffc4e4d89d02ab0`）。
- **次の最古欠損候補は2006年7月 `花盛`。** 現レコード `docs/real_machine_db/machines/2006-07_hanasakari.md` にresetBehaviorが未収集。
- `花盛 / SNKプレイモア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / RT` の先行検索は実施済みだが、本機固有reset情報はまだ確定できていない。

## 次回再開地点

1. **LATEST_HANDOFF基準183件地点から継続。** 2007年9月残候補、とくに `ハイサイネオ` を最新mainで既存確認し、未処理かつ導入時期を確認できる最古機から追加する。
2. 9月漏れ監査を閉じた後、2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
3. resetBehavior遡及QAは **2006年7月 `花盛`** から再開。既存性能コアはやり直さず、v0.7 resetBehaviorのみ補完する。
4. PARTIAL/UNVERIFIEDは検索語・型式/メーカー/シリーズ表記と資料系統を変えて再探索し、競合値は平均せず `CONFLICT` を維持する。
