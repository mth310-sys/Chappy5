# デビルマン3

machineName: デビルマン3（製品名: デビルマン）
manufacturer: エレコ / アルゼ
releaseDate: 2005-10
generation: 5号機初期
systemType: ボーナス + 完走型RT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 6 | 103.0% |

信頼度: ANALYSIS_HIGH

複数の後年資料で一致。設定は1・6の2段階のみであることは2005年10月21日の業界記事でも確認。

## initialHitBySetting

主要ボーナス確率:

| 設定 | BIG | デビルチャンス(REG相当) |
|---|---:|---:|
| 1 | 約1/426 | 約1/1365 |
| 6 | 約1/368 | 約1/1024 |

信頼度: ANALYSIS_SINGLE

設定別の詳細確率は現存する後年整理資料で確認。今回の探索では当時攻略DBの該当設定別確率ページを直接確保できていないため、数値は現時点では単一解析資料扱いとする。

## baseGamesPer50

UNVERIFIED

複数の検索語で再探索したが、2005年初代デビルマン3について比較可能な50枚あたりゲーム数の確定値は今回確認できなかった。

## netIncrease

BIG後100G RT「デビルゲーム」: 100G完走で約80枚増加（約0.8枚/G相当）

信頼度: OFFICIAL（100G・約80枚）

## basicPayout

- BIG: 465枚超の払い出しで終了 / 純増約300枚
- デビルチャンス: 150枚超の払い出しで終了 / 純増約100枚
- BIG後は必ず100GのRT「デビルゲーム」へ突入し、100Gで約80枚獲得

BIG終了条件とRT100G/約80枚はメーカー公式。BIG/デビルチャンスの純増目安とデビルチャンス終了条件は旧パチマガスロマガDBで確認。

## modeSpecificMinimumData

- BIG後100G完走型RT「デビルゲーム」
- RTはボーナスが成立しても揃えるまで継続し、100G完走可能と旧攻略DBに記載
- 小役とボーナスの同時抽選機能を搭載
- 設定は1・6の2段階

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 初代2005年版固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時ゲーム数天井は公開仕様として確認できず、天井ゲーム数引継ぎは物差し上非該当。本機固有のRT内部状態据え置き処理は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を示す高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時ゲーム数天井を用いる仕様は確認できず、天井用ゲーム数カウンタは物差し上非該当
- ceilingAfterReset: 通常時天井/短縮天井の公開仕様を確認できず非該当扱い
- modeAfterReset: 朝一専用モード/通常時モード再抽選の公開情報を確認できず
- stateAfterReset: BIG後RT「デビルゲーム」は100Gのゲーム状態として確認できるが、設定変更/電源断時のRT状態の保持・消去を直接示す資料は未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要な出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要な不利要素は確認できず
- resetDetection: 「デビルマン3」「初代デビルマン」「2005」「エレコ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別」を組み合わせて再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

メーカー公式、当時業界記事、旧攻略DB、後年回顧/解析を横断。BIG後RT100G・約80枚など性能仕様は確認できる一方、2005年初代固有の設定変更・据え置き・単純電断時の内部処理やガックン判別は確定資料に到達できなかった。後継の2010/2015年版デビルマンのリセット情報は別機種なので流用しない。

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — デビルマン
   - https://www.universal-777.com/product/slot/devilman/
   - BIG 465枚超終了、BIG後100G RT、100Gで約80枚、同時抽選機能
   - reliability: OFFICIAL
2. ユニバーサルエンターテインメント公式 — 2005年製品一覧
   - https://www.universal-777.com/product/slot/2005/
   - デビルマン発売年月 2005年10月
   - reliability: OFFICIAL
3. グリーンべると — アルゼが５号機２機種を発表（2005-10-21）
   - https://web-greenbelt.jp/00005251/
   - サクラ大戦S2・デビルマン3、設定1/6の2段階
   - reliability: INDUSTRY
4. パチマガスロマガ — デビルマン3 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/56/a.php
   - 5号機/5ライン/3枚掛け、BIG後100G RT、約80枚、BIG465枚(純増約300枚)、デビルチャンス150枚(純増約100枚)
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — ユニバーサル系5号機全機種一覧
   - https://5goki.com/universal
   - 2005年10月、エレコ、機械割97.0%/103.0%、BIG約400枚/REG約104枚の後年整理
   - reliability: ANALYSIS_SINGLE
6. 2005年特集 — パチンコ・パチスロ思い出年表
   - https://www.dorubako.biz/year/2005.html
   - 設定1/6、機械割97.0%/103.0%、BIG約1/426→約1/368、デビルチャンス約1/1365→約1/1024、BIG/REG/RT獲得性能
   - reliability: ANALYSIS_SINGLE
7. パチマガスロマガFREE — 名機 the ORIGIN デビルマン3
   - https://pachimaga.com/free/special/1bd7da0fe3e891a708de9d428ce9fb09cc739130.php
   - 2005年10月、ボーナス+RT、BIG後100G RTの補助確認
   - reliability: ANALYSIS_SINGLE

## missingFields

- baseGamesPer50
- 設定別BIG/デビルチャンス確率の別ソース直接照合
- 初代2005年版固有の設定変更/据え置き/電源OFF→ON時内部処理
- 初代2005年版固有の変更判別/ガックン情報
- 公開朝一専用数値

## conflicts

- BIG純増について、旧攻略DBは約300枚、5号機クロニクルは約400枚とする後年表記がある。メーカー公式は「465枚超の払い出しで終了」までを明示。純増値は定義・攻略手順差の可能性があるため、現時点では旧攻略DBの約300枚を基本記録し、5号機クロニクルの約400枚表記はCONFLICT候補として保持する。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
