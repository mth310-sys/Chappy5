# 日本一の桃太郎CT30

machineName: 日本一の桃太郎CT30
manufacturer: ベルコ
releaseDate: 2005-10（OFFICIAL系ページではCT5製品ページ内で2005年10月登場。二次一覧には2005-12表記もあり）
generation: 5号機初期
systemType: ボーナス主体 / 2種BB（CT）搭載 / 30Φ派生

## payoutRateBySetting

5号機クロニクルは「日本一の桃太郎CT5/CT30」を同一項目で掲載:

| 設定 | 機械割 |
|---|---:|
| 1 | 94.5% |
| 2 | 96.6% |
| 3 | 99.3% |
| 4 | 101.0% |
| 5 | 102.8% |
| 6 | 104.2% |

信頼度: ANALYSIS_SINGLE

CT30単独の設定別PAYOUT表は現時点で未発見。CT5のパチマガスロマガ・シミュレート値（94.32〜104.64%）をCT30へ自動転記しない。

## initialHitBySetting

UNVERIFIED

CT5には設定別BIG/CB確率の高信頼解析値が存在するが、CT30が完全同一抽選値であることを単独資料で確認できていないため、現時点ではCT30へ転記しない。

## baseGamesPer50

UNVERIFIED

## netIncrease

該当なし候補。CT5系統はRTなしだが、CT30単独仕様としての独立確認待ち。

## basicPayout

UNVERIFIED

## modeSpecificMinimumData

- ベルコ公式「日本一の桃太郎CT5」製品ページに「日本一の桃太郎CT-30」の筐体画像が併載されている。
- 同ページのスペック表示に「5号機、ノーマル、30Φ」とある。
- 5号機クロニクルは「日本一の桃太郎CT5/CT30」を一つの項目として扱い、共通の機械割表を掲載する。
- 独立名称として「日本一の桃太郎CT30」が5号機一覧資料にも残るため、全機種収集方針上はCT5とは別レコードで保持する。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: UNVERIFIED。機種名表記揺れ（日本一の桃太郎CT30 / 日本一の桃太郎CT-30 / 桃太郎CT30）、ベルコ名を併用し「設定変更」「リセット」「朝一」を再探索したが、本30Φ仕様固有の公開挙動を確認できず。
- carryOverBehavior: UNVERIFIED。据え置き時に引き継ぐ内部ゲーム数・状態を明示する本機固有資料は確認できず。
- powerCycleBehavior: UNVERIFIED。電源OFF→ONのみの場合の挙動を設定変更と区別して示す公開資料は確認できず。
- gameCounterReset: 該当する通常時ゲーム数天井を確認できない。パチマガスロマガのCT5攻略では「攻め時・ヤメ時→特にナシ」とされ、ベルコ公式も5号機ノーマル/CT機として案内している。ただしCT30単独資料不足のため「天井非搭載」を30Φ固有確定値としては扱わない。
- ceilingAfterReset: 該当天井の公開確認なし。短縮天井等の朝一恩恵も確認できず。
- modeAfterReset: 通常時モード管理・朝一専用モードを示す公開資料は確認できず。
- stateAfterReset: 設定変更時の内部状態再抽選/引継ぎを示す本機固有資料は確認できず。
- advantageousSectionReset: 非該当。2005年の5号機初期で、有利区間制度導入前。
- resetBenefits: 公開確認できる朝一/設定変更恩恵なし。
- resetPenalties: 公開確認できる設定変更時の主要不利要素なし。
- resetDetection: ガックン、表示、ゲーム数挙動など本機固有の設定変更判別情報は再探索後も確認できず。
- numericResetData: 公開数値なし。

### resetBehavior QAメモ

2026-08-31に、メーカー公式、当時/後年解析、5号機DBを横断し、CT30表記揺れと「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン」を組み合わせて再探索した。30Φ単独の高信頼リセット資料には到達できなかったため、性能コアの既存状態とは分離してPARTIALとする。CT5側の挙動を根拠なく自動転記しない。

## sources

取得日: 2026-08-31

1. BELLCO公式 — 日本一の桃太郎CT5 機種情報
   - https://www.s-bellco.co.jp/products/slot/momoraro/
   - CT5と「日本一の桃太郎CT-30」の筐体画像を併載。2005年10月登場、スペック欄に「5号機、ノーマル、30Φ」。
   - reliability: OFFICIAL
2. 5号機クロニクル — ベルコ5号機全機種一覧
   - https://5goki.com/bellco
   - 「日本一の桃太郎CT5/CT30」として2005/10、共通機械割94.5〜104.2%を掲載。
   - reliability: ANALYSIS_SINGLE
3. スロリスクタイム — 2005年代に発売されたパチスロ一覧
   - https://pachisuro100.com/2005slot/
   - CT5=2005/10、CT30=2005/12と別名で掲載。
   - reliability: ANALYSIS_SINGLE
4. パチスロ5号機一覧（保存一覧）
   - https://onlineslotpro.blog.fc2.com/blog-entry-1229.html
   - CT5とCT30を別名称として列挙。
   - reliability: ANALYSIS_SINGLE
5. パチマガスロマガ — 日本一の桃太郎CT5 攻略情報
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/75/belco_slot_75.php
   - CT5側で「攻め時・ヤメ時→特にナシ」を確認。CT30への仕様自動転記はせず、天井/朝一狙い情報の探索補助根拠としてのみ使用。
   - reliability: ANALYSIS_HIGH

## missingFields

- CT30単独の設定別BIG/CB確率
- CT30単独の50枚あたりゲーム数
- CT30単独の基本獲得枚数
- CT5とCT30の抽選仕様が完全同一であることの高信頼資料
- CT30固有の設定変更/据え置き/電断時挙動
- CT30固有の変更判別情報

## conflicts

- 導入時期: ベルコ公式製品ページ/5号機クロニクルはCT5/CT30系を2005-10として扱う一方、スロリスクタイムはCT30を2005-12とする。平均化せずCONFLICTとして保持。
- CT5とCT30の性能同一性: 5号機クロニクルは共通表で扱うが、CT30単独解析表は未確認。CT5の詳細値を推測転記しない。
