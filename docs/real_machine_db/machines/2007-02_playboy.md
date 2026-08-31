# パチスロPLAYBOY

machineName: パチスロPLAYBOY
manufacturer: 山佐
releaseDate: 2007-02-04
generation: 5号機初期
systemType: A+RT / 完全告知

## payoutRateBySetting

設定1〜4: 95.1 / 98.9 / 102.8 / 107.1%。pacnkと後年実機資料で一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

- BIG: 設定1 1/315.1、2 1/292.6、3 1/273.1、4 1/256.0
- REG/BG: 設定1 1/630.2、2 1/585.1、3 1/546.1、4 1/512.0
- ボーナス合算: 設定1 1/210.05、2 1/195.05、3 1/182.04、4 1/170.67

信頼度: ANALYSIS_HIGH

## baseGamesPer50

機種名/山佐/2007/50枚/1000円/ベース/コイン持ち/ベル確率を分岐して探索。ベル確率は設定1 1/15.20〜設定4 1/14.10を確認したが、50枚あたりゲーム数の明示値は確定できず UNVERIFIED。

## netIncrease

BB後に20GのRT「プレイボーイチャンス」。公開資料ではRT純増/Gの比較可能な明示値を確定できず UNVERIFIED。

## basicPayout

当時業界一次系記事:
- BIG: 約325枚
- BG/REG相当: 約160枚

信頼度: INDUSTRY

## modeSpecificMinimumData

- 山佐初の5号機。
- 25Φ版と30Φ版はスペック/ゲーム性が異なるため別レコード化。
- 25Φ版は第3停止後告知の完全告知機。
- 全小役が同時抽選対象。
- BB後に20G RTを付加。
- 設定は1〜4の4段階。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時RT/内部状態処理を高信頼資料で確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT状態等の固有引継ぎを確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの固有挙動を確認できず UNVERIFIED
- gameCounterReset: 通常時に天井ゲーム数を用いる仕様は今回確認できず。RT中の電源断時処理はUNVERIFIED
- ceilingAfterReset: 公開された天井/短縮天井を確認できず
- modeAfterReset: 朝一専用モードを確認できず
- stateAfterReset: 設定変更時の朝一内部状態優遇を確認できず
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 公開された設定変更時の主要朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン/ランプ/表示等を含め本機固有の変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

「PLAYBOY / プレイボーイ / 山佐 / 5号機 / 2007」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / プレイボーイチャンス / ガックン / 天井」を組み合わせ、メーカー公式、当時業界記事、解析/設定資料、後年回顧を横断。固有の朝一変更挙動は確定できなかった。

## sources

取得日: 2026-08-31

1. 山佐ネクスト公式 — パチスロPLAYBOY
   - https://yamasa-next.co.jp/model_plb/
   - 5号機、A+RT、稼働時期2007年2月、完全告知/同時抽選の公式確認
   - reliability: OFFICIAL
2. グリーンべると — 山佐初の5号機『パチスロプレイボーイ』
   - https://web-greenbelt.jp/00004967/
   - 2006-12-29発表、25Φ/30Φ別仕様、25Φ BIG約325枚/BG約160枚、BB後20G RT、2007-02-04納品予定
   - reliability: INDUSTRY
3. pacnk — プレイボーイ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_pureiboi2007a.html
   - 4段階設定、ボーナス合算、ベル、ブドウ、PAYOUT
   - reliability: ANALYSIS_SINGLE
4. こだわり山佐の館 — プレイボーイ実機資料
   - https://plaza.rakuten.co.jp/jognoyamasa/2110/
   - 設定別BIG/REG・機械割。pacnkのPAYOUT/合算と整合
   - reliability: ANALYSIS_SINGLE

## missingFields

- baseGamesPer50
- RT純増/G
- resetBehaviorの固有設定変更/据え置き/電源断挙動
- resetDetection

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## conflicts

- 5号機クロニクルには導入月2007年10月、BIG約260枚/REG約104枚など、2006年12月当時業界記事および山佐公式の2007年2月稼働時期と整合しない記述があるため、本レコードの導入/基本獲得枚数には採用しない。