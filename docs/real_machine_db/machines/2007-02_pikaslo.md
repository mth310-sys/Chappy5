# PIKASLO（ピカスロ）

machineName: PIKASLO（ピカスロ）
manufacturer: ヤーマ
affiliation: 現・ベルコ系公式製品アーカイブに掲載
releaseDate: 2007-02
generation: 5号機初期
systemType: ノーマル / 完全告知 / BIG+2種CB

## payoutRateBySetting

設定1〜3の3段階。

- 資料A pacnk: 設定1 97.5%、2 101.5%、3 104.5%
- 資料B 5号機クロニクル: 設定1 97.5%、2 101.0%、3 104.5%

設定2のみ0.5pt差があるため平均せずCONFLICTとして保持する。

信頼度: CONFLICT

## initialHitBySetting

pacnkでボーナス合算のみ確認。

- 設定1: 1/218.50
- 設定2: 1/202.30
- 設定3: 1/188.30

BIG/CB1/CB2個別の設定別確率は、機種名表記揺れ・型式名候補・BIG/CB/ボーナス確率を分岐して再探索したが今回確定できず UNVERIFIED。

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

「PIKASLO / ピカスロ / ピカスロ1 / ヤーマ」に「50枚 / 1000円 / ベース / コイン持ち / 通常時ゲーム数」を組み合わせて再探索したが、比較可能な明示値を確認できず UNVERIFIED。

## netIncrease

該当なし。ベルコ公式製品一覧では5号機・ノーマルとして掲載。pacnkも付加機能なし・天井非搭載のノーマル完全告知機として整理。

## basicPayout

パチマガスロマガ旧機種攻略資料で規定払い出し枚数と純増目安を確認。

- BIG: 345枚超払い出し終了 / 純増約336枚
- CB1: 253枚超払い出し終了 / 純増約221枚
- CB2: 134枚超払い出し終了 / 純増約117枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン
- 完全告知。ボーナス告知時に雷鳴音を使用
- 設定1〜3の3段階
- BIG + 2種類のCB
- 天井機能は非搭載
- RT/ART等の付加機能は今回確認した資料では非搭載

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時挙動を高信頼資料で確認できず UNVERIFIED
- carryOverBehavior: 天井・モード・RT/ARTを用いないノーマル機であり、引継ぎ対象となる公開ゲーム数管理は今回確認できず
- powerCycleBehavior: 電源OFF→ONのみの固有挙動を確認できず UNVERIFIED
- gameCounterReset: 天井非搭載。公開された内部ゲーム数天井管理なし
- ceilingAfterReset: 非該当（天井非搭載）
- modeAfterReset: 朝一専用モード/モード管理を確認できず
- stateAfterReset: 設定変更時の朝一内部状態優遇を確認できず
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 公開された主要朝一恩恵を確認できず
- resetPenalties: 公開された主要朝一不利要素を確認できず
- resetDetection: ガックン/告知ランプ/リール挙動を含め、本機固有の変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

「PIKASLO / ピカスロ / ピカスロ1 / ヤーマ / 2007」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井」を組み合わせ、メーカー公式、当時攻略資料、古い機種DB、後年5号機一覧を横断。天井非搭載までは確認できたが、本機固有の設定変更判別や電源断挙動は確定できなかった。

## sources

取得日: 2026-08-31

1. BELLCO公式 — パチスロ機種一覧（ヤーマ旧機種）
   - https://www.s-bellco.co.jp/products/slot/
   - 「ピカスロ」2007年2月登場、5号機、ノーマルを公式確認
   - reliability: OFFICIAL
2. パチマガスロマガ旧機種攻略 — ピカスロ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/04/a.php
   - 5号機/5ライン、完全告知、BIG/CB1/CB2の規定払い出し枚数と純増目安
   - reliability: ANALYSIS_HIGH
3. pacnk — PIKASLO 設定判別ツール
   - https://pacnk.com/slot/tools/sh_pikasuro.html
   - 2007年2月導入、3段階設定、ボーナス合算、PAYOUT、天井非搭載、ノーマル完全告知
   - reliability: ANALYSIS_SINGLE
4. 5号機クロニクル — ヤーマ5号機全機種一覧
   - https://5goki.com/yama
   - 導入2007/2、設定別機械割
   - reliability: ANALYSIS_SINGLE
5. パチマガスロマガFREE — 5号機ヒストリア2007年前編
   - https://pachimaga.com/free/playback/6e5a0c3e24180ec7c9d1174be25db63a1809f366.php
   - 2007年前半登場順の網羅企画にピカスロ掲載
   - reliability: ANALYSIS_HIGH

## missingFields

- BIG/CB1/CB2の設定別個別確率
- baseGamesPer50
- resetBehaviorの本機固有設定変更/据え置き/電源断挙動
- resetDetection

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## conflicts

- 設定2機械割: pacnk 101.5% / 5号機クロニクル 101.0%。平均せず双方保持。
