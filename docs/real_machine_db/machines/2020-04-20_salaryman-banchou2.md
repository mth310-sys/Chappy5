# 押忍！サラリーマン番長2

No: 1350
machineName: 押忍！サラリーマン番長2
machineNameVariants: 押忍！サラリーマン番長2 / 押忍！サラリーマン番長２ / サラ番2 / S押忍！サラリーマン番長2A2
manufacturer: 大都技研
releaseDate: 2020-04-20
formalModelName: S押忍！サラリーマン番長2A2
certificationNumber: 9S1687
generation: 6号機
systemType: AT / 疑似ボーナス + 差枚数管理AT

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.8% |
| 2 | 99.2% |
| 3 | 101.0% |
| 4 | 104.1% |
| 5 | 108.2% |
| 6 | 112.6% |

- HAZUSE、必勝本、スロパチクエスト等で一致。
- reliability: ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION

## initialHitBySetting
初当たり合算（番長ボーナス + 頂RUSH）:
| 設定 | 初当たり合算 |
|---|---:|
| 1 | 1/346.6 |
| 2 | 1/322.2 |
| 3 | 1/316.7 |
| 4 | 1/278.9 |
| 5 | 1/291.9 |
| 6 | 1/212.5 |

- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50.5G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- 番長ボーナス / 頂RUSHともに純増約3.0枚/G。
- reliability: INDUSTRY_WITH_MULTIPLE_ANALYSIS_CONFIRMATION

## basicPayout
- 番長ボーナス: 20G開始、継続成功で25G→30G+α。純増約3.0枚/G。
- 頂RUSH: 差枚数管理型、1セット100枚+α。
- reliability: INDUSTRY_WITH_MULTIPLE_ANALYSIS_CONFIRMATION

## modeSpecificMinimumData
- 通常モード: 通常A / 通常B / 天国。
- モード別天井: 通常A 約799G、通常B 約561G、天国 99G。
- 通常Aは実消化765G付近から前兆を経て最大約799Gで番長ボーナス。
- 有利区間リセットでブルーレジェンドも終了。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **非有利区間へ移行**。
- **天井G数RESET / 内部状態RESET / 有利区間RESET**。
- 設定変更は通常モード（通常A / 通常B / 天国）の移行抽選契機の1つ。
- 朝一は実戦上、轟の通常ステージ開始。

### carryOverBehavior
- 据え置き時は **天井進行 / 内部状態 / 有利区間をCARRY_OVER** とする公開解析がある。
- 朝一初当たりまでの高確B移行ゲーム数は前日最終G + 当日Gの内部ハマリゲーム数を参照するため、据え置き推測に利用できる。

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ON: **天井G数CARRY_OVER / 内部状態CARRY_OVER / 有利区間CARRY_OVER**。
- 有利区間ランプは通常時消灯タイプのため、見た目の消灯だけでは変更/据え置きを判別できない。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 最大天井は通常A 約799G、通常B 約561G、天国99G。

### ceilingAfterReset
- 設定変更専用の短縮天井は確認されていない。
- 設定変更時にモード再抽選され、選択モードに応じて天井が99 / 約561 / 約799Gとなる。
- 「リセット専用短縮天井」ではなく通常モード抽選として扱う。

### modeAfterReset
- 設定変更時に通常A / 通常B / 天国を再抽選。
- 公開モード移行率は設定変更時・AT非当選BB終了時・AT終了時に共通して用いられる解析値として保存する。
- 設定1: 通常A 76.6% / 通常B 12.1% / 天国 11.3%。
- 設定2: 59.7% / 22.7% / 17.6%。
- 設定3: 70.3% / 16.8% / 12.9%。
- 設定4: 53.9% / 28.1% / 18.0%。
- 設定5: 66.0% / 19.9% / 14.1%。
- 設定6: 50.0% / 31.6% / 18.4%。

### stateAfterReset
- 設定変更: **RESET / 非有利区間へ移行**。
- 据え置き / 電断: **CARRY_OVER**。
- 通常時内部状態は通常 / 高確A / 高確B / 超高確。
- 設定変更直後の各内部状態の専用振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: **RESET（非有利区間へ）**。
- 据え置き / 純電断: **CARRY_OVER**。
- 通常時は有利区間ランプ常時消灯タイプ。初当たり後の初回押し順ナビで点灯する仕様のため、朝一ランプ消灯単独では変更判別不可。
- ブルーレジェンドは有利区間リセットで終了。

### resetBenefits
- 特別な設定変更専用恩恵は主要攻略資料で **特になし** と整理されている。
- モードは再抽選され、天国選択なら99G天井となるが、設定変更専用優遇ではなく共通モード移行抽選。
- 朝一即前兆は天国期待度が上がる可能性を示す実戦解析があるが、設定変更専用確率は未公開。

### resetPenalties
- 設定変更により前日の天井進行・内部状態・有利区間、および有利区間に紐づくブルーレジェンドを失う。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ: 通常時消灯のため **判別不可**。
- ガックン: 実戦上 **判別不可** とする解析あり。本機固有の発生率公開値は確認できず。
- 高確B（雫ステージ）移行G数が有力な変更判別材料。
  - 当日201 / 401 / 601G付近でレア役なしに雫ステージ移行 → リセット濃厚 + 通常A期待。
  - 当日101 / 301 / 501G付近で移行 → リセット濃厚 + 通常B期待。
  - 前日最終G + 当日Gの合算側で上記周期に一致して移行 → 据え置き濃厚。
- これは高確Bのゲーム数管理を利用する推測材料であり、単独で100%確定とはしない。

### numericResetData / publicMorningNumbers
- 設定変更を含む通常モード移行抽選:
  - 設定1: 通常A 76.6% / 通常B 12.1% / 天国 11.3%
  - 設定2: 59.7% / 22.7% / 17.6%
  - 設定3: 70.3% / 16.8% / 12.9%
  - 設定4: 53.9% / 28.1% / 18.0%
  - 設定5: 66.0% / 19.9% / 14.1%
  - 設定6: 50.0% / 31.6% / 18.4%
- モード別天井: 通常A 約799G / 通常B 約561G / 天国99G。
- 通常A天井到達時は750G以上消化によりハンコ10個加算（天井到達側の恩恵）。
- 設定変更専用の短縮天井・専用初当たり率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11に `押忍！サラリーマン番長2 / サラ番2 / S押忍！サラリーマン番長2A2 / 9S1687 / 大都技研 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 雫ステージ / ガックン / 有利区間ランプ` を組み替え、メーカー製品告知、業界記事、HAZUSE、必勝本、1geki、スロパチクエスト、期待値見える化、ちょんぼりすた等を横断。性能コア、設定変更時の非有利区間移行・天井/状態リセット、純電断時の引継ぎ、モード移行率、朝一雫ステージによる据え置き/変更推測まで複数系統で照合。設定変更直後の内部状態専用振り分けとガックン率は十分な再探索後も公開固定値を確認できず推測していない。

## conflicts
- スロパチクエストの旧表には電源OFF/ON側の天井・状態を「再抽選」とする表記が残る一方、期待値見える化の朝一専用解析は電断据え置きで **天井/内部状態/有利区間を引き継ぐ** と明記し、宵越しゲーム数を参照した雫ステージ移行による据え置き判別も実証的に整理している。1geki当時ページは電断挙動を「調査中」。本DBでは具体的な宵越し判別ロジックと整合するCARRY_OVERをcanonicalとし、旧「再抽選」表記を `CONFLICT_LEGACY_RESET_TABLE` として保持。

## missingFields
- 設定変更直後の通常/高確A等の専用状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 本機固有ガックン発生率: UNVERIFIED_AFTER_RESEARCH（実戦上判別不可という解析あり）。
- 朝一即前兆の設定変更専用発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## coreStatus
- **COMPLETE_CORE**

## overallReliability
- **ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION**

## sources
取得日: 2026-09-11

1. 大都技研 製品サイト告知（PiDEA X経由）
   - https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E3%80%8C%E6%8A%BC%E5%BF%8D%E3%82%B5%E3%83%A9%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%B3%E7%95%AA%E9%95%B72%E3%80%8D%E8%A3%BD%E5%93%81%E3%82%B5%E3%82%A4%E3%83%88%E3%83%BBpv%E3%81%8C%E5%85%AC%E9%96%8B%EF%BC%8F%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94
   - 2020-03-23の製品サイト公開を確認。
   - reliability: INDUSTRY/OFFICIAL_REFERENCE
2. グリーンべると — 4/20導入記事
   - https://web-greenbelt.jp/post-37592/
   - 2020-04-20導入、純増約3.0枚/G、頂RUSH 1セット100枚+αを確認。
   - reliability: INDUSTRY
3. PiDEA X — 4/20導入
   - https://www.pidea.jp/articles/1587342946
   - 2020-04-20導入、出玉率97.8〜112.6%、初当たり1/346.6〜1/212.5、純増約3.0枚/Gを確認。
   - reliability: INDUSTRY
4. HAZUSE — 9S1687
   - https://hazuse.com/machine/pachislot/9S1687/
   - 型式、検定番号、設定別初当たり、機械割、約50.5G/50枚、モード天井、モード移行率を確認。
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3505/1/77354
   - 設定別初当たり/機械割、BB 20G以上、純増約3.0枚/Gを確認。
   - reliability: ANALYSIS_HIGH
6. 期待値見える化 — 朝一リセット挙動
   - https://slotjin.com/slot/saraban2-reset/
   - 設定変更=非有利区間・天井/状態RESET、電断据え置き=天井/状態/有利区間引継ぎ、通常時有利区間ランプ消灯、ガックン実戦上不可、雫ステージによる判別を確認。
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 note — 天井/朝一
   - https://note.com/dakuo_slot/n/n0e798a7ba93d
   - モード別天井、内部ハマリG参照の朝一雫ステージ判別を確認。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — 総合解析
   - https://chonborista.com/slot/daito-slot/106359/
   - 天井、通常モード、モード移行率、ブルーレジェンドと有利区間リセットの関係を確認。
   - reliability: ANALYSIS_HIGH
9. スロパチクエスト — 天井/朝一
   - https://www.slopachi-quest.com/article/salaryman-bantyo2-tennjou/
   - 設定変更時天井/状態RESET、有利区間ランプ判別不可、リセット特別恩恵なしの整理を確認。電断欄は他資料と競合のためCONFLICTとして保存。
   - reliability: ANALYSIS_SINGLE_WITH_CONFLICT
10. 1geki — 天井/設定変更・電断
   - https://1geki.jp/slot/s_saraban2/3/
   - モード別天井を確認。当時時点では設定変更/電断時の状態等が「調査中」であったことを確認。
   - reliability: ANALYSIS_HIGH_FOR_CEILING / UNRESOLVED_FOR_RESET_AT_PUBLICATION
