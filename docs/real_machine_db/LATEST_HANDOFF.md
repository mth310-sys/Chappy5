# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 168件目 `トリプルクラウンS2-30`（清龍ゲームジャパン、2007-09-17）までを継承。
- 2007-09-18〜30の残候補を再監査し、具体導入日が取れない月精度9月機も十分な再探索後に順次処理する方針を継続。
- **169件目として `コータローまかりとおる!`（IGTジャパン、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_kotaro-makaritoru.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `26a0f59dcdd2fc966edf9d428ffb157e8a9aa277`
- resetBehavior遡及QAの既存進捗は `スーパーお父さん`（2006-04）まで。次は `ウイニングレッド / ウイニングレッド30` の未補完側から継続。

## 169. コータローまかりとおる!

- manufacturer: IGTジャパン
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ボーナス + ART / CZ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- IGTジャパン5号機一覧で2007年9月導入。
- P-WORLD型式名 `コータローマカリトオル`。
- 当時保存記事では2007-08-23にIGTジャパンが発表展示会を開催。
- 同名の奥村遊機製パチンコ版（2007年7月）と分離して扱う。
- 9月内の具体納品/ホール導入日は、型式名・メーカー名・当時記事・旧DBを変えて再探索したが確定できず `UNVERIFIED`。

### 性能コア

| 設定 | コータローBIG | BIG | REG | 合成 | 機械割 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/1985.9 | 1/753.3 | 1/668.7 | 1/300.6 | 96.4% |
| 2 | 1/1985.9 | 1/744.7 | 1/662.0 | 1/297.9 | 98.2% |
| 3 | 1/1927.5 | 1/720.2 | 1/636.3 | 1/287.4 | 100.1% |
| 4 | 1/1820.4 | 1/697.2 | 1/601.3 | 1/274.2 | 103.5% |
| 5 | 1/1820.4 | 1/662.0 | 1/590.4 | 1/266.4 | 105.8% |
| 6 | 1/1724.6 | 1/648.9 | 1/580.0 | 1/260.1 | 108.4% |

- 5号機クロニクルと後年設定判別DBで主要ボーナス確率・機械割は整合。
- パチマガスロマガ: 次回ボーナスまで継続するARTを搭載。
- BIG: 規定払い出し465枚、純増約360枚。
- REG: 8回入賞または12G消化、純増約90枚。
- baseGamesPer50: 十分再探索後も比較可能な数値を確定できず `UNVERIFIED`。
- ART純増/G: 十分再探索後も確定できず `UNVERIFIED`。

### v0.7 resetBehavior

`コータローまかりとおる / コータローマカリトオル / IGT / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ART / CZ / ガックン` を組み替え、当時解析・旧DB・業界記事・後年回顧資料を横断。

- settingChangeBehavior: `UNVERIFIED`。設定変更時のCZ/ART・ナビ獲得状態の初期化/引継ぎを確定できず。
- carryOverBehavior: `UNVERIFIED`。据え置き時のART/CZ/ナビ状態・ゲーム数の引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみの状態処理を確定できず。
- gameCounterReset: 通常時ゲーム数天井の確定資料なし。ART/CZ関連カウンタ処理は `UNVERIFIED`。
- ceilingAfterReset: リセット短縮天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一/設定変更専用モード `NONE_CONFIRMED`。
- stateAfterReset: ART/CZ・ナビ獲得状態の再抽選/引継ぎ `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: ガックン・初期出目・液晶/ランプ等の本機固有変更判別は十分再探索後も `UNVERIFIED`。
- numericResetData: 公開朝一数値 `NONE_CONFIRMED`。

## 主要出典

- IGTジャパン5号機一覧 / 5号機クロニクル: https://5goki.com/igt
- P-WORLD: https://www.p-world.co.jp/machine/database/4899
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/48/a.php
- パチマガスロマガ 機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/48/igt_slot_48.php
- 後年設定判別DB: https://pacnk.com/slot/tools/sh_kotaromakaritooru.html
- 当時発表記事保存: https://p-mans.blogspot.com/2007/08/
- IGT全機種回顧: https://pachiseven.jp/articles/detail/13009
- タイアップ機一覧: https://sulocale.sulopachinews.com/archives/23596

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準169件地点から継続。2007年9月残候補の最古未処理を監査する。**
2. 残候補: `戦慄-IF IT HAPPEN（戦慄DD） / DIGIParadise / くりぃむしちゅー / めんそーれ2-30 / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. 候補ごとに具体納品/ホール導入日を優先探索。9月17日以前が判明した場合は遡及追加する。
4. `戦慄-IF IT HAPPEN（戦慄DD）` は2007-08-17時点でメーカー情報公開済みだが、具体実導入日は未確定のため検索継続。
5. 2007-09-18〜30で具体導入日が取れない場合、月精度9月機を十分な再探索後に順次処理し、9月漏れ監査完了後に2007年10月へ進む。
6. 現時点で `マッドジー` は2007-10-09、`マジックモンスター2` は2007-10-22予定を確認済み。これより早い10月機があれば先に処理する。
7. resetBehavior遡及QAは `ウイニングレッド / ウイニングレッド30`（2006-04）の未補完側から継続。
8. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
