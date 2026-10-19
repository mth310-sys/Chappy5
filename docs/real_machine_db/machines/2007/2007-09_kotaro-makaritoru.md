# コータローまかりとおる!

machineName: コータローまかりとおる!
manufacturer: IGTジャパン
releaseDate: 2007-09
generation: 5号機初期
systemType: ボーナス + ART / CZ
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 導入時期・機種同定

- IGTジャパン5号機一覧では2007年9月導入。
- P-WORLD型式名: `コータローマカリトオル`。
- 2007-08-23にIGTジャパンが発表展示会を開催した当時記事を確認。
- 同名の奥村遊機製パチンコ版（2007年7月）と混同しない。
- 9月内の具体的なホール納品日/導入日は十分再探索したが、現存高信頼資料では月精度以上を確定できず `UNVERIFIED`。

## 性能コア

### ボーナス確率 / 機械割

| 設定 | コータローBIG | BIG | REG | ボーナス合成 | 機械割 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/1985.9 | 1/753.3 | 1/668.7 | 1/300.6 | 96.4% |
| 2 | 1/1985.9 | 1/744.7 | 1/662.0 | 1/297.9 | 98.2% |
| 3 | 1/1927.5 | 1/720.2 | 1/636.3 | 1/287.4 | 100.1% |
| 4 | 1/1820.4 | 1/697.2 | 1/601.3 | 1/274.2 | 103.5% |
| 5 | 1/1820.4 | 1/662.0 | 1/590.4 | 1/266.4 | 105.8% |
| 6 | 1/1724.6 | 1/648.9 | 1/580.0 | 1/260.1 | 108.4% |

- 5号機クロニクルと後年設定判別DBで、BIG/REGおよび機械割は整合。
- パチマガスロマガ基本システムでは、次回ボーナスまで継続するARTを搭載。
- BIG: 規定払い出し465枚、純増約360枚。
- REG: 8回入賞または12G消化で終了、純増約90枚。
- ARTはボーナスとのループが主性能要素。後年回顧資料でも「次回ボーナスまで続くART」を確認。
- baseGamesPer50: 機種名/型式名/IGT/50枚/1000円/ベース/コイン持ち等で再探索したが比較可能な設定別または代表値を確定できず `UNVERIFIED`。
- ART純増/G: 現存資料を再探索したが物差し用途で確定できる数値を取得できず `UNVERIFIED`。

## v0.7 resetBehavior

検索語を `コータローまかりとおる / コータローマカリトオル / IGT / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ART / CZ / ガックン` で組み替え、当時解析、旧DB、業界記事、後年回顧資料を横断。

- settingChangeBehavior: `UNVERIFIED`。設定変更時のCZ/ART・ナビ獲得状態の初期化/引継ぎを確定できる資料なし。
- carryOverBehavior: `UNVERIFIED`。据え置き時のART/CZ/ナビ状態・ゲーム数の引継ぎを確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみのART/CZ/ナビ状態処理を確定できず。
- gameCounterReset: 通常時ゲーム数天井の確定資料なし。ART/CZ関連カウンタの設定変更時処理は `UNVERIFIED`。
- ceilingAfterReset: リセット短縮天井の公開根拠を確認できず `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更専用モードの公開根拠を確認できず `NONE_CONFIRMED`。
- stateAfterReset: ART/CZ・ナビ獲得状態の再抽選/引継ぎは `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機初期・有利区間制度前）。
- resetBenefits: 公開された朝一専用恩恵/短縮数値は `NONE_CONFIRMED`。
- resetPenalties: 公開された設定変更時固有の不利要素は `NONE_CONFIRMED`。
- resetDetection: ガックン、初期出目、液晶/ランプ等による本機固有の設定変更判別は十分再探索後も `UNVERIFIED`。
- numericResetData: 公開朝一数値は `NONE_CONFIRMED`。

## sources

- IGTジャパン5号機一覧 / 5号機クロニクル: https://5goki.com/igt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/4899
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/48/a.php
- パチマガスロマガ 機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/48/igt_slot_48.php
- 後年設定判別DB: https://pacnk.com/slot/tools/sh_kotaromakaritooru.html
- 当時発表記事保存（2007-08-28更新）: https://p-mans.blogspot.com/2007/08/
- IGT全機種回顧: https://pachiseven.jp/articles/detail/13009
- タイアップ機一覧（IGTパチスロ版と奥村パチンコ版の分離確認）: https://sulocale.sulopachinews.com/archives/23596

取得日: 2026-09-01

## missingFields

- 2007年9月内の具体導入日
- baseGamesPer50
- ART純増/G
- 設定変更/据え置き/電源OFF→ON時のART/CZ/ナビ状態処理
- 本機固有の変更判別

## conflicts

- 現時点で主要性能値の明確な数値競合は確認せず。
- 同名奥村遊機パチンコ版の2007-07導入情報は別機種であり、本レコードへ混入させない。
